import { Router } from "express";
import dotters from "./dotters";
import locations from "./locations";

const routes = Router();

routes.use("/dotters", dotters);
routes.use("/locations", locations);

routes.get("/healthcheck", async (req, res) => {
	res.status(200).json({
		message: "Hello World",
	});
});

export default routes;
