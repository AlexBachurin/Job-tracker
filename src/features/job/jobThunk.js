import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customUrl from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { checkForUnauthorizedResponse } from "../../utils/axios";

export const createJobThunk = async (job, thunkApi) => {
	try {
		const resp = await customUrl.post("/jobs", job);
		thunkApi.dispatch(clearValues());
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error);
	}
};

export const deleteJobThunk = async (jobId, thunkApi) => {
	//trigger loading from allJobs slice
	thunkApi.dispatch(showLoading());
	console.log(jobId);
	try {
		const resp = await customUrl.delete(`/jobs/${jobId}`);
		console.log(resp.data);
		//trigger jobs renew by using getAllJobs method from AllJobs slice
		//loading will automatically be handled in getAllJobs extrareducers
		thunkApi.dispatch(getAllJobs());
		return resp.data.msg;
	} catch (error) {
		//hide loading if error
		thunkApi.dispatch(hideLoading());
		return checkForUnauthorizedResponse(error);
	}
};

export const editJobThunk = async ({ jobId, job }, thunkApi) => {
	try {
		const resp = await customUrl.patch(`jobs/${jobId}`, job);
		thunkApi.dispatch(clearValues());
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error);
	}
};
