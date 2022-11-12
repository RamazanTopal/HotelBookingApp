import { Response, Request } from "express";
import { statusCode } from "../constants/index";

export const notFoundPage = (req: Request, res: Response) => {
	res.status(statusCode.NOT_FOUND).json({
		message: `${req.originalUrl} not found`
	});
};
