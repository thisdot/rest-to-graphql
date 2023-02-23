import { yoga } from "../../app";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { parse } from "graphql";

import {
	mockDotterDefaultGql,
	mockDotterByIdGql,
	mockNewDotter,
} from "../../__mocks__/mockDotters";

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
});
