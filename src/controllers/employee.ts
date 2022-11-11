import { Response, Request, NextFunction } from "express";
import { employeeService } from "../services/employee";

export const register = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await employeeService.register(req.body);

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
		const { username, password } = req.body;

		const token = await employeeService.login(username, password);

		res.status(200).json({ success: true, token });
	} catch (error) {
		next(error);
	}
};
