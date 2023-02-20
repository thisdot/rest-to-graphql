import app from "./../app";
import request from "supertest";

// group test using describe
describe("Locations API endpoint:", () => {
	describe("GET / for locations", () => {
		it("returns locations with no query paramaters", async () => {
			const res = await request(app)
				.get("/locations")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body).toEqual({ message: "Hello World" });
		});
	});
});
