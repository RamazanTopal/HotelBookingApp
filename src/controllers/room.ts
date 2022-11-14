import { Response, Request, NextFunction } from "express";
import { roomService } from "../services/room";

export const create = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
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
		const { id } = req.body;
		await roomService.update(id, req.body);

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
