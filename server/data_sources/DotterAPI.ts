import { RESTDataSource } from "apollo-datasource-rest";

export class DotterAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = `${process.env.REST_ENDPOINT_URL}dotters`;
	}

	async getDotters(page: number = 1, perPage: number = 8) {
		return this.get("", {
			page,
			perPage,
		});
	}

	async getDotter(id: number | string) {
		return this.get(`${id}`);
	}

	async createDotter({
		firstName,
		lastName,
		title,
		profilePic,
		city,
		state,
		country,
	}: {
		firstName: string;
		lastName: string;
		title: string;
		profilePic: string;
		city: string;
		state?: string;
		country: string;
	}) {
		return this.post("", {
			firstName,
			lastName,
			title,
			profilePic,
			city,
			state,
			country,
		});
	}

	async updateDotter(
		id: number | string,
		{
			firstName,
			lastName,
			title,
			profilePic,
		}: {
			firstName: string;
			lastName: string;
			title: string;
			profilePic: string;
		}
	) {
		return this.put(`${id}`, {
			firstName,
			lastName,
			title,
			profilePic,
		});
	}

	async deleteDotter(id: number | string) {
		return this.delete(`${id}`);
	}
}
