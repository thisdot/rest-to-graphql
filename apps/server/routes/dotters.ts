import { Router } from "express";
import { getAll, create, get, update, destroy } from "@models/dotter";
import { ValidationError } from "@utils/errors";

const routes = Router();

routes.get("/", async (req, res) => {
	const page = Number(req.query.page ?? 1);
	const perPage = Number(req.query.perPage ?? 6);
	const includeLocation = Boolean(req.query.includeLocation ?? false);

	try {
		const { dotters, count } = await getAll({
			perPage,
			page,
			includeLocation,
		});

		res.json({
			data: dotters,
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

routes.post("/", async (req, res) => {
	console.log(">>REQ", req.body);
	const { firstName, lastName, title, profilePic, city, state, country } =
		req.body;
	const newDotter = await create({
		firstName,
		lastName,
		title,
		profilePic,
		city,
		state,
		country,
	});

	res.json(newDotter);
});

routes.get("/:id", async (req, res) => {
	const id = Number(req.params.id);
	const includeLocation = Boolean(req.query.includeLocation ?? false);

	try {
		const dotter = await get(Number(id), { includeLocation });

		if (!dotter) {
			res.status(404).send("Dotter not found.");
			return;
		}

		res.json(dotter);
	} catch (err) {
		if (err instanceof ValidationError) {
			res.status(400).send(err.message);
			return;
		}
		res.status(500).send(err);
	}
});

routes.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, title, profilePic } = req.body;
	const dotter = await update(Number(id), {
		firstName,
		lastName,
		title,
		profilePic,
	});
	res.json(dotter);
});

routes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const dotter = await destroy(Number(id));
	res.json(dotter);
});

export default routes;
