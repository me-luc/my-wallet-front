import axios from "axios";
import { BASE_URI } from "./URI";

export async function signIn(email, password) {
	return await axios
		.post(`${BASE_URI}/sign-in`, {
			email,
			password,
		})
		.then((response) => {
			return { data: response.data, error: false };
		})
		.catch((error) => {
			return { data: error.response.data, error: true };
		});
}
