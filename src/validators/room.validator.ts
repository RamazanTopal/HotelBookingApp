import Joi, { ObjectSchema } from "joi";

const generalMessages = (variable: string) => {
	return {
		"string.base": `${variable} should be a type of 'text'`,
		"string.min": `${variable} should have a minimum length of {#limit}`,
		"any.required": `${variable} is a required field`
	};
};

export const createValidator: ObjectSchema = Joi.object({
	name: Joi.string().required().messages(generalMessages("name")),
	className: Joi.string().required().messages(generalMessages("className")),
	description: Joi.string().messages(generalMessages("description")),
	price: Joi.number().required().messages(generalMessages("price"))
});

export const updateValidator: ObjectSchema = Joi.object({
	id: Joi.number().required().messages(generalMessages("id")),
	name: Joi.string().messages(generalMessages("name")),
	className: Joi.string().messages(generalMessages("className")),
	description: Joi.string().messages(generalMessages("description")),
	price: Joi.number().messages(generalMessages("price"))
});
