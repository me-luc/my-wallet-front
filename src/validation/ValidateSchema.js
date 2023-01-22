export default function validateSchema(schema, body) {
	const validation = schema.validate(body, { abortEarly: true });
	const { error } = validation;

	if (error) {
		return error.details.message;
	}

	return false;
}
