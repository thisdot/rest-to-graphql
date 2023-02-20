import request from "supertest";
import app from "./../app";
import {
	mockLocationDefault,
	mockLocationPerPage,
	mockLocationSecondPage,
	mockWithDotterLocation,
	mockLocationById,
	mockLocationByIdWithDotter,
} from "../__mocks__/mockLocation";

describe("Locations API endpoint:", () => {
	describe("GET / for locations as default", () => {
		it("returns locations", async () => {
			const res = await request(app)
				.get("/locations")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body.data).toEqual(
				expect.arrayContaining(mockLocationDefault.data)
			);
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

			expect(res.text).toMatch(
				/Invalid value for page. Expected number, got NaN/
			);
		});
		it("returns 404 from perPage variable is invalid", async () => {
			const res = await request(app)
				.get("/locations?perPage=fiftytwo")
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(400);

			expect(res.text).toMatch(
				/Invalid value for perPage. Expected number, got NaN/
			);
		});
	});
});

describe("Locations API endpoint with ID", () => {
	describe("GET / for locations with id", () => {
		it("returns specific location", async () => {
			const res = await request(app)
				.get("/locations/3")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body).toEqual(mockLocationById);
		});
	});
	describe("GET / for locations with id with dotter info", () => {
		it("returns specific location with the dotter info", async () => {
			const res = await request(app)
				.get("/locations/3?includeDotters=true")
				.expect("Content-Type", /json/)
				.expect(200);

			expect(res.body).toEqual(mockLocationByIdWithDotter);
		});
	});
});

describe("Locations API for endpoint with ID invalid", () => {
	describe("GET / for locations with id", () => {
		it("returns a 404, no locations exists, not found", async () => {
			const res = await request(app)
				.get("/locations/33")
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(404);
			expect(res.text).toMatch(/Location not found/);
		});
	});
});
