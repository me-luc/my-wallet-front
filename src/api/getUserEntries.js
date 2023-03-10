import axios from "axios";
import { BASE_URI } from "./URI";

export default async function getUserEntries() {
	const token = localStorage.getItem("userToken");

	return await axios
		.get(`${BASE_URI}/entries`, { headers: { token } })
		.then((response) => {
			console.log("RESPOSTA DA API", response);
			return { data: response.data, error: false };
		})
		.catch((error) => {
			return { data: error.response.data || error.message, error: true };
		});
}
