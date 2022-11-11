import { Express } from "express-serve-static-core";
import { DataSource } from "typeorm";
import * as path from "path";

const dbConnect = async (app: Express) => {
	const AppDataSource = new DataSource({
		type: "postgres",
		url: process.env.DB_URL,
		entities: [path.join(__dirname, "../entities/*.{js,ts}")]
	});
	try {
		await AppDataSource.initialize();
		console.log("database is connected");
		app.listen(3000, () => {
			console.log("server is running");
		});
	} catch (error) {
		console.log("database is not connected");
	}
};

export default dbConnect;
