import { Response, Request, NextFunction } from "express";
import { reservationService } from "../services/reservation";

export const create = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await reservationService.create(req.body);

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
		const { id } = req.body;
		await reservationService.update(id!, req.body);

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
		await reservationService.remove(id!);

		res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};
