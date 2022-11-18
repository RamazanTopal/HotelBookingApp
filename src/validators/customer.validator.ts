import Joi, { ObjectSchema } from "joi";

const generalMessages = (variable: string) => {
	return {
		"string.base": `${variable} should be a type of 'text'`,
		"string.min": `${variable} should have a minimum length of {#limit}`,
		"any.required": `${variable} is a required field`
	};
};

export const registerValidator: ObjectSchema = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] }
		})
		.required()
		.messages(generalMessages("email")),
	password: Joi.string()
		.min(6)
		.required()
		.messages(generalMessages("password")),
	firstName: Joi.string()
		.min(2)
		.required()
		.messages(generalMessages("firstName")),
	lastName: Joi.string()
		.min(2)
		.required()
		.messages(generalMessages("lastName")),
	age: Joi.number().min(2).required().messages(generalMessages("age")),
	phone: Joi.string().min(10).required().messages(generalMessages("phone")),
	address: Joi.string().required().messages(generalMessages("address"))
});

export const loginValidator: ObjectSchema = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] }
		})
		.required()
		.messages(generalMessages("email")),
	password: Joi.string()
		.min(6)
		.required()
		.messages(generalMessages("password"))
});
