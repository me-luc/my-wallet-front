import axios from "axios";
import { BASE_URI } from "./URI";

export async function signUp(name, email, password, confirmPassword) {
	return await axios
		.post(`${BASE_URI}/sign-up`, {
			name,
			email,
			password,
			confirmPassword,
		})
		.then((response) => {
			return { data: response.data, error: false };
		})
		.catch((error) => {
			return { data: error.response.data, error: true };
		});
}
