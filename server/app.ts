import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());

app.get("/healthcheck", async (req, res) => {
	res.status(200).json({
		message: "Hello World",
	});
});

app.listen(PORT, () => {
	console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
