import request from "supertest";
import { app } from "./../app";

import {
	mockDotterDefault,
	mockDotterWithLocation,
	mockDotterById,
	mockNewDotter,
	mockNewDotterTitle,
} from "../__mocks__/mockDotters";
import exp from "constants";

describe("Dotters API endpoint:", () => {
	describe("GET / for dotters as default", () => {
		it("returns dotters", async () => {
			const res = await request(app)
				.get("/dotters")
				.expect("Content-Type", /json/)
				.expect(200);

			// contains accurate pageInfo data
			// page numbers and dotter total may vary
			expect(res.body.pageInfo).toEqual(
				expect.objectContaining(mockDotterDefault.pageInfo)
			);
			// contains an array of dotters of at least
			// if not more than the seeded dotter data
			expect(res.body.data).toEqual(
				expect.arrayContaining(mockDotterDefault.data)
			);
		});
	});

	describe("GET / for dotters with invalid params", () => {
		it("returns error", async () => {
			const res = await request(app)
				.get("/dotters?page=ted")
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(400);

			expect(res.text).toMatch(
				/Invalid value for page. Expected number, got NaN/
			);
		});
	});

	describe("GET / for dotters with location data", () => {
		it("returns dotters w/ location", async () => {
			const res = await request(app)
				.get("/dotters?includeLocation=true")
				.expect("Content-Type", /json/)
				.expect(200);

			const { pageInfo, data } = mockDotterWithLocation;
			// contains accurate pageInfo data
			// page numbers and dotter total may vary
			expect(res.body.pageInfo).toEqual(expect.objectContaining(pageInfo));
			// contains an array of dotters of at least
			// if not more than the seeded dotter data
			expect(res.body.data).toEqual(expect.arrayContaining(data));
		});
	});

	describe("GET /:id for dotters", () => {
		it("returns dotter matching :id", async () => {
			const dotterId = 5;
			const res = await request(app)
				.get(`/dotters/${dotterId}`)
				.expect("Content-Type", /json/)
				.expect(200);

			// contains object data matching the dot member
			// returned by specific id
			expect(res.body).toEqual(
				expect.objectContaining(mockDotterById(dotterId))
			);
		});
	});

	describe("GET /:id for dotters with invalid number", () => {
		it("returns no result", async () => {
			// assumption that our dot seed db will
			// not have more than 700 entries at time of test
			const dotterId = 775;
			const res = await request(app)
				.get(`/dotters/${dotterId}`)
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(404);

			expect(res.text).toMatch(/Dotter not found./);
		});
	});

	describe("POST / create new dotter", () => {
		it("returns a newly created dotter", async () => {
			// create dotter
			const newDotter = mockNewDotter();
			// post to endpoint
			const res = await request(app)
				.post(`/dotters`)
				.send(newDotter)
				.expect("Content-Type", /json/)
				.expect(200);
			// fetch from endpoint
			const getDotter = await request(app)
				.get(`/dotters/${res.body.id}`)
				.expect("Content-Type", /json/)
				.expect(200);
			// validate the return data is equal to the posted data
			// destructured bc the api returns createdAt, updatedAt, etc ...
			const { firstName, lastName, title, profilePic } = newDotter;
			expect(res.body).toEqual(
				expect.objectContaining({ firstName, lastName, title, profilePic })
			);
			// id data is returned
			expect(res.body.id && res.body.locationId).toBeTruthy();

			// shoudl be about to get the dotter record we posted to the api
			expect(res.body).toStrictEqual(getDotter.body);
		});
	});

	describe("PUT / update existing dotter", () => {
		it("returns updated info on dotter", async () => {
			// create dotter
			const newDotter = mockNewDotter();
			const newTitle = mockNewDotterTitle();
			// post to endpoint
			const res = await request(app)
				.post(`/dotters`)
				.send(newDotter)
				.expect("Content-Type", /json/)
				.expect(200);
			// update existing record
			await request(app)
				.put(`/dotters/${res.body.id}`)
				.send({ title: newTitle })
				.expect("Content-Type", /json/)
				.expect(200);
			// fetch from endpoint
			const updatedDotter = await request(app)
				.get(`/dotters/${res.body.id}`)
				.expect("Content-Type", /json/)
				.expect(200);
			// original value of title should not match the updated title
			const { title, updatedAt } = updatedDotter.body;
			expect(title).toMatch(newTitle);
			expect(res.body.title).not.toEqual(title);
			expect(res.body.updatedAt).not.toEqual(updatedAt);
		});
	});

	describe("DELETE / destroy dotter", () => {
		it("returns not found after removing dotter", async () => {
			// create dotter
			const newDotter = mockNewDotter();
			// post to endpoint
			const res = await request(app)
				.post(`/dotters`)
				.send(newDotter)
				.expect("Content-Type", /json/)
				.expect(200);
			// delete dotter
			const deletedDotter = await request(app)
				.delete(`/dotters/${res.body.id}`)
				.expect("Content-Type", /json/)
				.expect(200);
			// delete again and it should
			// return not a valid entry
			const getDotter = await request(app)
				.delete(`/dotters/${res.body.id}`)
				.expect("Content-Type", /text\/html; charset=utf-8/)
				.expect(404);

			// deleted value should match created value
			expect(deletedDotter.body).toStrictEqual(res.body);
			// should be unable to delete it again. as it no longer exists
			expect(getDotter.text).toMatch(/Dotter not found./);
		});
	});
});
