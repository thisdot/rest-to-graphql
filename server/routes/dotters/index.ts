import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { generateConnectOrCreate } from "@utils/locationHelper";

const routes = Router();
const prisma = new PrismaClient();

routes.get("/", async (req, res) => {
	const page = Number(req.query.page ?? 1);
	const perPage = Number(req.query.perPage ?? 8);

	if (isNaN(page)) {
		res.status(400).send("Invalid page value");
		return;
	}

	if (isNaN(perPage)) {
		res.status(400).send("Invalid perPage value");
		return;
	}

	const dotters = await prisma.dotter.findMany({
		take: perPage,
		skip: (page - 1) * perPage,
	});

	res.json(dotters);
});

routes.post("/", async (req, res) => {
	const { firstName, lastName, title, profilePic, city, state, country } =
		req.body;

	const newDotter = await prisma.dotter.create({
		data: {
			firstName,
			lastName,
			title,
			profilePic,
			location: generateConnectOrCreate(city, state, country),
		},
	});

	res.json(newDotter);
});

routes.get("/:id", async (req, res) => {
	const { id } = req.params;

	if (isNaN(Number(id))) {
		res.status(400).send("Invalid identifier");
		return;
	}

	const dotter = await prisma.dotter.findUnique({
		where: { id: Number(id) },
	});

	if (!dotter) {
		res.status(404).send("Dotter not found.");
		return;
	}

	res.json(dotter);
});

routes.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, title, profilePic } = req.body;
	const post = await prisma.dotter.update({
		where: {
			id: Number(id),
		},
		data: {
			firstName,
			lastName,
			title,
			profilePic,
			updatedAt: new Date(),
		},
	});
	res.json(post);
});

routes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const post = await prisma.dotter.delete({
		where: {
			id: Number(id),
		},
	});
	res.json(post);
});

export default routes;
