import { Router } from "express";
import dotters from "./dotters";

const routes = Router();

routes.use("/dotters", dotters);

routes.get("/healthcheck", async (req, res) => {
	res.status(200).json({
		message: "Hello World",
	});
});

export default routes;
