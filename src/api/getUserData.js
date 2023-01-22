import axios from "axios";
import { BASE_URI } from "./URI";

export default async function getUserData() {
	const token = localStorage.getItem("userToken");

	return await axios
		.get(`${BASE_URI}/users`, { headers: { token } })
		.then((response) => {
			return { data: response.data, error: false };
		})
		.catch((error) => {
			return { data: error.response.data, error: true };
		});
}
