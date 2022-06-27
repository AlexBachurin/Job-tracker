import customUrl from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";
import { checkForUnauthorizedResponse } from "../../utils/axios";

export const registerUserThunk = async (url, user, thunkApi) => {
	try {
		const resp = await customUrl.post(url, user);
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error);
	}
};

export const loginUserThunk = async (url, user, thunkApi) => {
	try {
		const resp = await customUrl.post(url, user);
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error);
	}
};

export const updateUserThunk = async (url, user, thunkApi) => {
	try {
		const resp = await customUrl.patch(url, user);
		return resp.data;
	} catch (error) {
		//if something wrong with authentication then logout user immediately
		return checkForUnauthorizedResponse(error);
	}
};

//clear all store
export const clearStoreThunk = async (message, thunkApi) => {
	try {
		//logout user
		thunkApi.dispatch(logoutUser(message));
		//clear all jobs store
		thunkApi.dispatch(clearAllJobsState());
		//clear job values
		thunkApi.dispatch(clearValues());
		//return promise resolve
		return Promise.resolve();
		//if error promise reject
	} catch (error) {
		return Promise.reject();
	}
};
