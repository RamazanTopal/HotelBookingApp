import { Response, Request, NextFunction } from "express";
import { customerService } from "../services/customer";
import {
	registerValidator,
	loginValidator
} from "../validators/customer.validator";
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
		const matchValidation = loginValidator.validate({ email, password });

		if (matchValidation.error) {
			throw new validationError(
				`${matchValidation.error.details[0]?.message}`
			);
		}

		const token = await customerService.login(email, password);

		res.status(200).json({ success: true, token });
	} catch (error) {
		next(error);
	}
};
