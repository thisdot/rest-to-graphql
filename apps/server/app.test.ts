import app from "./app";
import request from "supertest";

// group test using describe
describe("GET /healthcheck", () => {
	it("returns status code 200 and message Hello World", async () => {
		const res = await request(app)
			.get("/healthcheck")
			.expect("Content-Type", /json/)
			.expect(200);

		expect(res.body).toEqual({ message: "Hello World" });
	});
});
