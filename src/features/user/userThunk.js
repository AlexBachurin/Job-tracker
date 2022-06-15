import customUrl from "../../utils/axios";
import { logoutUser } from "./userSlice";

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
		const resp = await customUrl.patch(url, user, {
			headers: {
				authorization: `Bearer ${thunkApi.getState().user.user.token}`,
				// authorization: `Bearer `,
			},
		});
		return resp.data;
	} catch (error) {
		console.log(error.response);
		//if something wrong with authentication then logout user immediately
		if (error.response.status === 401) {
			thunkApi.dispatch(logoutUser());
			return thunkApi.rejectWithValue(error.response.data.msg);
		}
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};
