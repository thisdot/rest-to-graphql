import { yoga } from "../../app";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { parse } from "graphql";

import {
	mockLocationDefault,
	mockLocationById,
} from "../../__mocks__/mockLocation";

function assertSingleValue<TValue extends object>(
	value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
	if (Symbol.asyncIterator in value) {
		throw new Error("Expected single value");
	}
}

describe("GQL Location", () => {
	describe("Query allLocations", () => {
		it("returns iterable of all locations", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});

			const result = await executor({
				document: parse(/* GraphQL */ `
					query AllLocations {
						allLocations {
							id
							city
							state
							country
							createdAt
							updatedAt
						}
					}
				`),
			});

			assertSingleValue(result);
			expect(result.data?.allLocations).toEqual(
				expect.arrayContaining(mockLocationDefault.data)
			);
		});
	});
	describe("Query location by ID", () => {
		it("returns location matching ID", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});

			const result = await executor({
				document: parse(/* GraphQL */ `
					query findLocation {
						findLocation(id: 3) {
							id
							state
							city
							country
							createdAt
							updatedAt
						}
					}
				`),
			});

			assertSingleValue(result);
			expect(result.data?.findLocation).toEqual(mockLocationById);
		});
	});
});
