import { signInSchema, signUpSchema } from "../schemas/UserSchema";

export function validateSignInSchema(body) {
	return validateSchema(signInSchema, body);
}

export function validateSignUpSchema(body) {
	return validateSchema(signUpSchema, body);
}
