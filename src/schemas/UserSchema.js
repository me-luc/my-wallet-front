import Joi from "joi";

export const signUpSchema = Joi.object({
	name: Joi.string().min(1).required().messages({
		"string.base": `Name should be a type of text`,
		"string.empty": `Name cannot be an empty field`,
		"string.min": `Name should have a minimum length of 1`,
		"any.required": `Name is a required field`,
	}),
	email: Joi.string().email().required().messages({
		"string.base": `E-mail should be a type of text`,
		"string.empty": `E-mail cannot be an empty field`,
		"string.min": `E-mail should have a minimum length of 1`,
		"any.required": `E-mail is a required field`,
	}),
	password: Joi.string().min(8).max(16).required().messages({
		"string.base": `Password should be a type of text`,
		"string.empty": `Password cannot be an empty field`,
		"string.min": `Password should have a minimum length of 8`,
		"string.max": `Password should have a maximum length of 18`,
		"any.required": `Password is a required field`,
	}),
	confirmPassword: Joi.string()
		.valid(Joi.ref("password"))
		.label("confirm password")
		.required()
		.messages({
			"any.only": "Passwords doesn't match",
		}),
});

export const signInSchema = Joi.object({
	email: Joi.string().email().required().messages({
		"string.base": `Email should be a type of text`,
		"string.empty": `Email cannot be an empty field`,
		"string.min": `Email should have a minimum length of 1`,
		"any.required": `Email is a required field`,
	}),
	password: Joi.string().min(8).max(16).required().messages({
		"string.base": `Password should be a type of text`,
		"string.empty": `Password cannot be an empty field`,
		"string.min": `Password should have a minimum length of 8`,
		"string.max": `Password should have a maximum length of 18`,
		"any.required": `Password is a required field`,
	}),
});
