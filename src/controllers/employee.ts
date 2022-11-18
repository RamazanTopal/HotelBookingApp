import { Response, Request, NextFunction } from "express";
import { employeeService } from "../services/employee";
import { registerValidator } from "../validators/employee.validator";
import { validationError } from "../error/errorHandler";

export const register = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const matchValidation = registerValidator.validate(req.body);

		if (matchValidation.error) {
			throw new validationError(
				`${matchValidation.error.details[0]?.message}`
			);
		}

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

		const matchValidation = registerValidator.validate(req.body);

		if (matchValidation.error) {
			throw new validationError(
				`${matchValidation.error.details[0]?.message}`
			);
		}

		const token = await employeeService.login(username, password);

		res.status(200).json({ success: true, token });
	} catch (error) {
		next(error);
	}
};
