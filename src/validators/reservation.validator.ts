import Joi, { ObjectSchema } from "joi";

const generalMessages = (variable: string) => {
	return {
		"string.base": `${variable} should be a type of 'text'`,
		"string.min": `${variable} should have a minimum length of {#limit}`,
		"any.required": `${variable} is a required field`
	};
};

export const createValidator: ObjectSchema = Joi.object({
	reservationDate: Joi.date()
		.required()
		.messages(generalMessages("reservationDate")),
	dateIn: Joi.date().required().messages(generalMessages("dateIn")),
	dateOut: Joi.date().required().messages(generalMessages("dateOut")),
	dateRange: Joi.number().required().messages(generalMessages("dateRange")),
	roomId: Joi.number().required().messages(generalMessages("roomId")),
	customerId: Joi.number().required().messages(generalMessages("customerId"))
});

export const updateValidator: ObjectSchema = Joi.object({
	reservationDate: Joi.date().messages(generalMessages("reservationDate")),
	dateIn: Joi.date().messages(generalMessages("dateIn")),
	dateOut: Joi.date().messages(generalMessages("dateOut")),
	dateRange: Joi.number().messages(generalMessages("dateRange")),
	roomId: Joi.number().messages(generalMessages("roomId")),
	customerId: Joi.number().messages(generalMessages("customerId")),
	id: Joi.number().required().messages(generalMessages("id"))
});
