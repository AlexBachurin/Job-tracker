import customUrl from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";
export const registerUserThunk = async (url, user, thunkApi) => {
	try {
		const resp = await customUrl.post(url, user);
		return resp.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};

export const loginUserThunk = async (url, user, thunkApi) => {
	try {
		const resp = await customUrl.post(url, user);
		return resp.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};

export const updateUserThunk = async (url, user, thunkApi) => {
	try {
		const resp = await customUrl.patch(url, user);
		return resp.data;
	} catch (error) {
		//if something wrong with authentication then logout user immediately
		if (error.response.status === 401) {
			thunkApi.dispatch(logoutUser());
			return thunkApi.rejectWithValue(error.response.data.msg);
		}
		return thunkApi.rejectWithValue(error.response.data.msg);
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
