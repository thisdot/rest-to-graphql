import { yoga } from "../../app";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { parse } from "graphql";

import {
	mockDotterDefaultGql,
	mockDotterByIdGql,
	mockNewDotter,
} from "../../__mocks__/mockDotters";
import { Dotter } from "@prisma/client";

function assertSingleValue<TValue extends object>(
	value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
	if (Symbol.asyncIterator in value) {
		throw new Error("Expected single value");
	}
}

describe("GQL Dotters", () => {
	describe("Query allDotters", () => {
		it("returns iterable of all dotters", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const result = await executor({
				document: parse(/* GraphQL */ `
					query allDotters {
						allDotters {
							firstName
							lastName
							location {
								state
							}
						}
					}
				`),
			});

			assertSingleValue(result);
			expect(result.data?.allDotters).toEqual(
				expect.arrayContaining(mockDotterDefaultGql)
			);
		});
	});
	describe("Query Dotter by ID", () => {
		it("returns Dotter matching ID", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const dotterId = 3;

			const result = await executor({
				document: parse(/* GraphQL */ `
					query findDotter($dotterId: Int) {
						findDotter(id: $dotterId) {
							id
							lastName
							firstName
							title
							profilePic
							createdAt
							updatedAt
						}
					}
				`),
				variables: { dotterId },
			});
			assertSingleValue(result);
			expect(result.data?.findDotter).toEqual(mockDotterByIdGql(dotterId));
		});
	});
	describe("Mutation create New Dotter", () => {
		it("returns a new Dotter", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const newMockDotter = mockNewDotter();

			const result = await executor({
				document: parse(/* GraphQL */ `
					mutation create($newMockDotter: CreateDotterInput) {
						createDotter(dotter: $newMockDotter) {
							firstName
							lastName
						}
					}
				`),
				variables: { newMockDotter },
			});
			assertSingleValue(result);
			const { firstName, lastName } = newMockDotter;
			expect(result.data?.createDotter).toEqual({ firstName, lastName });
		});
	});
	describe("Mutation update and existing Dotter", () => {
		let dotterId: number;
		it("returns a new Dotter", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const newMockDotter = mockNewDotter();

			const result = await executor({
				document: parse(/* GraphQL */ `
					mutation create($newMockDotter: CreateDotterInput) {
						createDotter(dotter: $newMockDotter) {
							id
							firstName
							lastName
						}
					}
				`),
				variables: { newMockDotter },
			});
			//@ts-ignore
			dotterId = result.data?.createDotter.id;
			assertSingleValue(result);
			const { firstName, lastName } = newMockDotter;
			expect(result.data.createDotter).toEqual(
				expect.objectContaining({ firstName, lastName })
			);
		});

		it("updates the dotters first name", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const newFirstName = "Jesseeee";
			const updatedDotter = await executor({
				document: parse(/* GraphQL */ `
					mutation updateDotter($id: Int!, $input: UpdateDotterInput) {
						updateDotter(id: $id, dotter: $input) {
							firstName
							lastName
							id
						}
					}
				`),
				variables: {
					id: dotterId,
					input: {
						firstName: newFirstName,
					},
				},
			});
			assertSingleValue(updatedDotter);
			expect(updatedDotter.data?.updateDotter.firstName).toEqual(newFirstName);
		});
	});
	describe("Mutation deletes existing Dotter", () => {
		let dotterId: number;
		it("returns a new Dotter", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const newMockDotter = mockNewDotter();

			const result = await executor({
				document: parse(/* GraphQL */ `
					mutation create($newMockDotter: CreateDotterInput) {
						createDotter(dotter: $newMockDotter) {
							id
							firstName
							lastName
						}
					}
				`),
				variables: { newMockDotter },
			});
			//@ts-ignore
			dotterId = result.data?.createDotter.id;
			assertSingleValue(result);
			const { firstName, lastName } = newMockDotter;
			expect(result.data.createDotter).toEqual(
				expect.objectContaining({ firstName, lastName })
			);
		});

		it("removes dotter!", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const deleteDotter = await executor({
				document: parse(/* GraphQL */ `
					mutation destroyDotter($id: Int!) {
						deleteDotter(id: $id) {
							firstName
							lastName
						}
					}
				`),
				variables: {
					id: dotterId,
				},
			});
			assertSingleValue(deleteDotter);
		});
		it("return null when queried after deletion", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});
			const result = await executor({
				document: parse(/* GraphQL */ `
					query findDotter($dotterId: Int) {
						findDotter(id: $dotterId) {
							id
							lastName
							firstName
						}
					}
				`),
				variables: { dotterId },
			});
			assertSingleValue(result);
			expect(result.data.findDotter).toEqual(null);
		});
	});
});
