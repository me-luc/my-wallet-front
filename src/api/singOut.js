import axios from "axios";
import { BASE_URI } from "./URI";

export default async function signOut() {
	const token = localStorage.getItem("userToken");

	localStorage.setItem("userToken", "");
	localStorage.setItem("name", "");

	return await axios
		.put(`${BASE_URI}/sign-out`, { headers: { token: token } })
		.then((response) => {
			return { data: response.data, error: false };
		})
		.catch((error) => {
			return { data: error.response.data, error: true };
		});
}
