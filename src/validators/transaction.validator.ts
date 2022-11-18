import Joi, { ObjectSchema } from "joi";

const generalMessages = (variable: string) => {
	return {
		"string.base": `${variable} should be a type of 'text'`,
		"string.min": `${variable} should have a minimum length of {#limit}`,
		"any.required": `${variable} is a required field`
	};
};

export const createValidator: ObjectSchema = Joi.object({
	date: Joi.date().required().messages(generalMessages("date")),
	name: Joi.string().required().messages(generalMessages("name")),
	customerId: Joi.number().required().messages(generalMessages("customerId")),
	employeeId: Joi.number().required().messages(generalMessages("employeeId")),
	reservationId: Joi.number()
		.required()
		.messages(generalMessages("reservationId")),
	paymentId: Joi.number().required().messages(generalMessages("paymentId"))
});

export const updateValidator: ObjectSchema = Joi.object({
	date: Joi.date().messages(generalMessages("date")),
	name: Joi.string().messages(generalMessages("name")),
	customerId: Joi.number().messages(generalMessages("customerId")),
	employeeId: Joi.number().messages(generalMessages("employeeId")),
	reservationId: Joi.number()
	.messages(generalMessages("reservationId")),
	paymentId: Joi.number().messages(generalMessages("paymentId")),
	id: Joi.number().required().messages(generalMessages("id"))
});
