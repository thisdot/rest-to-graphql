import { yoga } from "../../app";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { parse } from "graphql";

function assertSingleValue<TValue extends object>(
	value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
	if (Symbol.asyncIterator in value) {
		throw new Error("Expected single value");
	}
}

describe("GQL Healthcheck", () => {
	describe("Query healthcheack", () => {
		it("returns hello", async () => {
			const executor = buildHTTPExecutor({
				fetch: yoga.fetch,
			});

			const result = await executor({
				document: parse(/* GraphQL */ `
					query {
						healthcheck
					}
				`),
			});

			assertSingleValue(result);
			expect(result.data?.healthcheck).toMatch(/Hello/);
		});
	});
});
