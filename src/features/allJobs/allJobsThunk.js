import customUrl from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkApi) => {
	const { page, search, searchStatus, searchType, sort } =
		thunkApi.getState().allJobs;
	// create custom url with query params for server request
	let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
	//check if we have something in search, then add search query param to url
	if (search) {
		url += `&search=${search}`;
	}
	try {
		const resp = await customUrl.get(url, {
			headers: {
				authorization: `Bearer ${thunkApi.getState().user.user.token}`,
			},
		});
		return resp.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};

export const getStatsThunk = async (_, thunkApi) => {
	try {
		const resp = await customUrl.get("/jobs/stats", {
			headers: {
				authorization: `Bearer ${thunkApi.getState().user.user.token}`,
			},
		});
		console.log(resp.data);
		return resp.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};
