import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export async function signIn(email, password) {
	console.log("CLICKEED");
	console.log(BASE_URL);
	try {
		const request = await axios.post(`${BASE_URL}/sign-in`, {
			email,
			password,
		});
		console.log(request.data);
	} catch (error) {
		return error;
	}
}
