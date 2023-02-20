import request from "supertest";
import app from "./../app";
import {
	mockLocationDefault,
	mockLocationPerPage,
	mockLocationSecondPage,
	mockWithDotterLocation,
} from "../__mocks__/mockLocation";

// group test using describe
describe("Locations API endpoint:", () => {
	describe("GET / for locations as default", () => {
		it("returns locations", async () => {
			const res = await request(app)
				.get("/locations")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body).toEqual(mockLocationDefault);
		});
	});

	describe("GET / for locations per page", () => {
		it("returns locations with 3 per page", async () => {
			const res = await request(app)
				.get("/locations?perPage=3")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body).toEqual(mockLocationPerPage);
		});
	});

	describe("GET / for second page of locations", () => {
		it("returns locations with 3 per page", async () => {
			const res = await request(app)
				.get("/locations?page=2")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body).toEqual(mockLocationSecondPage);
		});
	});

	describe("GET / that includes dotters", () => {
		it("returns locations with dotter details included", async () => {
			const res = await request(app)
				.get("/locations?includeDotters=true")
				.expect("Content-Type", /json/)
				.expect(200);
			expect(res.body).toEqual(mockWithDotterLocation);
		});
	});

	describe("GET / for locations with invalid queries", () => {
		it("returns 404 from page variable is invalid", async () => {
			const res = await request(app)
				.get("/locations?page=eightyeight")
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(400);

			expect(res.body).toEqual({});
		});
		it("returns 404 from perPage variable is invalid", async () => {
			const res = await request(app)
				.get("/locations?perPage=fiftytwo")
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(400);

			expect(res.body).toEqual({});
		});
	});
});
