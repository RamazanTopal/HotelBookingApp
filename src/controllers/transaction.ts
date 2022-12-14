import { Response, Request, NextFunction } from "express";
import { transactionService } from "../services/transaction";
import {
	createValidator,
	updateValidator
} from "../validators/transaction.validator";
import { validationError } from "../error/errorHandler";

export const create = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const matchValidation = createValidator.validate(req.body);

		if (matchValidation.error) {
			throw new validationError(
				`${matchValidation.error.details[0]?.message}`
			);
		}

		await transactionService.create(req.body);

		res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

export const update = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const matchValidation = updateValidator.validate(req.body);

		if (matchValidation.error) {
			throw new validationError(
				`${matchValidation.error.details[0]?.message}`
			);
		}

		await transactionService.update(req.body);

		res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

export const remove = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.body;
		await transactionService.remove(id!);

		res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

export const getList = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const transactions = await transactionService.getList();

		res.status(200).json({ success: true, transactions });
	} catch (error) {
		next(error);
	}
};
