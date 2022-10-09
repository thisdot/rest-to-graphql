import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
