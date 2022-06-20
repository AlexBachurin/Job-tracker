import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customUrl from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";

export const createJobThunk = async (job, thunkApi) => {
	try {
		const resp = await customUrl.post("/jobs", job, {
			headers: {
				authorization: `Bearer ${thunkApi.getState().user.user.token}`,
			},
		});
		thunkApi.dispatch(clearValues());
		return resp.data;
	} catch (error) {
		if (error.response.status === 401) {
			thunkApi.dispatch(logoutUser());
			return thunkApi.rejectWithValue(error.response.data.msg);
		}
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};

export const deleteJobThunk = async (jobId, thunkApi) => {
	//trigger loading from allJobs slice
	thunkApi.dispatch(showLoading());
	console.log(jobId);
	try {
		const resp = await customUrl.delete(`/jobs/${jobId}`, {
			headers: {
				authorization: `Bearer ${thunkApi.getState().user.user.token}`,
			},
		});
		console.log(resp.data);
		//trigger jobs renew by using getAllJobs method from AllJobs slice
		//loading will automatically be handled in getAllJobs extrareducers
		thunkApi.dispatch(getAllJobs());
		return resp.data.msg;
	} catch (error) {
		//hide loading if error
		thunkApi.dispatch(hideLoading());
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};

export const editJobThunk = async ({ jobId, job }, thunkApi) => {
	try {
		const resp = await customUrl.patch(`jobs/${jobId}`, job, {
			headers: {
				authorization: `Bearer ${thunkApi.getState().user.user.token}`,
			},
		});
		thunkApi.dispatch(clearValues());
		return resp.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.msg);
	}
};
