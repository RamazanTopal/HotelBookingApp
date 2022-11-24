import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Config } from "../config/config";
import { NotAuthorizedError } from "../error/errorHandler";
import { IGetUserAuthInfoRequest } from "../utils/generalRequest";

declare global {
	namespace Express {
		interface Request {
			user?: IGetUserAuthInfoRequest;
		}
	}
}
export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers?.authorization?.split(" ")[1];

	if (!token) {
		throw new NotAuthorizedError("You don't have token");
	}

	const user = jwt.verify(token, Config.readFromEnv().SECRET_KEY);

	if (!user) {
		return res.status(404).json({ message: "Invalid Token" });
	}

	req.user = user as IGetUserAuthInfoRequest;

	return next();
};
