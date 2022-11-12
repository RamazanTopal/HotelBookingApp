import { Response, Request, NextFunction } from "express";
import { CustomError, IErrorResponse } from "../error/errorHandler";

export const errorHandle = (
	error: IErrorResponse,
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	if (error instanceof CustomError) {
		res.status(error.statusCode).json(error.serializeErrors());
	}
	next();
};
