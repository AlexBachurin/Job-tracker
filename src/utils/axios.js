import axios from "axios";
import { clearStore } from "../features/user/userSlice";
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

//logout and clear store on error 401(unauthorized)
//for example it will logout user if auth token expires
export const checkForUnauthorizedResponse = (error, thunkApi) => {
	if (error.response.status === 401) {
		//clear store and logout user
		thunkApi.dispatch(clearStore());
		return thunkApi.rejectWithValue("unauthorized access, logging out...");
	}
	return thunkApi.rejectWithValue(error.response.data.msg);
};

export default customUrl;
