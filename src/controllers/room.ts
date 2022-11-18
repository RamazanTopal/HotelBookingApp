import { Response, Request, NextFunction } from "express";
import { roomService } from "../services/room";
import { createValidator, updateValidator } from "../validators/room.validator";
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

		await roomService.create(req.body);

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

		await roomService.update(req.body);

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
		await roomService.remove(id);

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
		const rooms = await roomService.getList();

		res.status(200).json({ success: true, rooms });
	} catch (error) {
		next(error);
	}
};
