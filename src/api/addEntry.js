import axios from "axios";
import { BASE_URI } from "./URI";

export async function addEntry(entry) {
	const token = localStorage.getItem("userToken");

	return await axios
		.post(`${BASE_URI}/entries`, entry, { headers: { token } })
		.then((response) => {
			return { data: response.data, error: false };
		})
		.catch((error) => {
			return { data: error.response.data, error: true };
		});
}
