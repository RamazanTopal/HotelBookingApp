import jwt from "jsonwebtoken";
import { Config } from "../config/config";
export const generateToken = (data: object) => {
	const token = jwt.sign(
		{
			...data
		},
		Config.readFromEnv().SECRET_KEY,
		{ expiresIn: "12h" }
	);
	return token;
};
