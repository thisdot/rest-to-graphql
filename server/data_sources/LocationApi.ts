import { RESTDataSource } from "apollo-datasource-rest";

export class LocationAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = `${process.env.REST_ENDPOINT_URL}locations`;
	}

	async getLocations(page: number = 1, perPage: number = 8) {
		return this.get("", {
			page,
			perPage,
		});
	}

	async getLocation(id: number | string) {
		return this.get(`${id}`);
	}
}
