import { app } from "./app";

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, (): void => {
	console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
