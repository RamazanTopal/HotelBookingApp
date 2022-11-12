import { Response, Request, NextFunction } from "express";
import { customerService } from "../services/customer";

export const register = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await customerService.register(req.body);

		res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

export const login = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { email, password } = req.body;

		const token = await customerService.login(email, password);

		res.status(200).json({ success: true, token });
	} catch (error) {
		next(error);
	}
};
