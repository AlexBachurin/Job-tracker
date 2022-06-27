import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customUrl = axios.create({
	baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});
//interceptor to automatically add headers with token to each request to server
customUrl.interceptors.request.use((config) => {
	const user = getUserFromLocalStorage();
	if (user) {
		config.headers.common["Authorization"] = `Bearer ${user.token}`;
	}
	return config;
});
export default customUrl;
