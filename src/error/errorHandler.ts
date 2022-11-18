import { statusCode } from "../constants/index";
export interface IErrorResponse {
	message: string;
	statusCode: number;
	status: string;
	serializeErrors(): IError;
}

export interface IError {
	message: string;
	statusCode: number;
	status: string;
}

export abstract class CustomError extends Error {
	abstract statusCode: number;
	abstract status: string;

	constructor(message: string) {
		super(message);
	}

	serializeErrors(): IError {
		return {
			statusCode: this.statusCode,
			message: this.message,
			status: this.status
		};
	}
}

export class BadRequestError extends CustomError {
	statusCode = statusCode.BAD_REQUEST;
	status = "error";

	constructor(message: string) {
		super(message);
	}
}

export class NotAuthorizedError extends CustomError {
	statusCode = statusCode.UNAUTHORIZED;
	status = "error";

	constructor(message: string) {
		super(message);
	}
}

export class ServerError extends CustomError {
	statusCode = statusCode.SERVICE_UNAVAILABLE;
	status = "error";

	constructor(message: string) {
		super(message);
	}
}

export class validationError extends CustomError {
	statusCode = statusCode.UNPROCESSABLE_ENTITY;
	status = "error";

	constructor(message: string) {
		super(message);
	}
}
