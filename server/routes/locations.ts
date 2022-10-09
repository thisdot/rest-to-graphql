import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const routes = Router();
const prisma = new PrismaClient();

routes.get("/", async (req, res) => {
	const locations = await prisma.location.findMany({
		include: {
			dotters: true,
		},
	});
	res.json(locations);
});

routes.get("/:id", async (req, res) => {
	const { id } = req.params;

	if (isNaN(Number(id))) {
		res.status(400).send("Invalid identifier");
		return;
	}

	const location = await prisma.location.findUnique({
		where: { id: Number(id) },
		include: {
			dotters: true,
		},
	});

	if (!location) {
		res.status(404).send("Location not found.");
		return;
	}

	res.json(location);
});

export default routes;
