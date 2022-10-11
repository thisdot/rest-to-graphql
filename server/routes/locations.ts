import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { getAll, get } from "@models/location";
import { ValidationError } from "@utils/errors";

const routes = Router();

routes.get("/", async (req, res) => {
	const page = Number(req.query.page ?? 1);
	const perPage = Number(req.query.perPage ?? 6);
	const includeDotters = Boolean(req.query.includeDotters ?? false);

	try {
		const { locations, count } = await getAll({
			perPage,
			page,
			includeDotters,
		});

		res.json({
			data: locations,
			pageInfo: {
				page,
				perPage,
				total: count,
				totalPages: Math.ceil(count / perPage),
			},
		});
	} catch (err) {
		if (err instanceof ValidationError) {
			res.status(400).send(err.message);
			return;
		}
		res.status(500).send(err);
	}
});

routes.get("/:id", async (req, res) => {
	const id = Number(req.params.id);
	const includeDotters = Boolean(req.query.includeDotters ?? false);

	try {
		const location = await get(id, {
			includeDotters,
		});

		if (!location) {
			res.status(404).send("Location not found.");
			return;
		}

		res.json(location);
	} catch (err) {
		if (err instanceof ValidationError) {
			res.status(400).send(err.message);
			return;
		}
		res.status(500).send(err);
	}
});

export default routes;
