import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customUrl from "../../utils/axios";

const initialFiltersState = {
	search: "",
	searchStatus: "all",
	searchType: "all",
	sort: "latest",
	sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
	isLoading: false,
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	stats: {},
	monthlyApplications: [],
	...initialFiltersState,
};

//get all jobs thunk
export const getAllJobs = createAsyncThunk(
	"allJobs/getJobs",
	async (_, thunkApi) => {
		let url = `/jobs`;
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
	}
);

//get stats thunk
export const getStats = createAsyncThunk(
	"allJobs/getStats",
	async (_, thunkApi) => {
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
	}
);

const allJobsSlice = createSlice({
	name: "allJobs",
	initialState,
	reducers: {
		showLoading: (state) => {
			state.isLoading = true;
		},
		hideLoading: (state) => {
			state.isLoading = false;
		},
		//search handle
		handleSearchChange: (state, { payload }) => {
			const { name, value } = payload;
			state[name] = value;
		},
	},
	extraReducers: {
		[getAllJobs.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllJobs.fulfilled]: (state, action) => {
			state.isLoading = false;
			const { jobs, numOfPages, totalJobs } = action.payload;
			state.jobs = jobs;
			state.numOfPages = numOfPages;
			state.totalJobs = totalJobs;
		},
		[getAllJobs.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action.payload);
		},
		// get stats
		[getStats.pending]: (state) => {
			state.isLoading = true;
		},
		[getStats.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.stats = action.payload.defaultStats;
			state.monthlyApplications = action.payload.monthlyApplications;
		},
		[getStats.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action.payload);
		},
	},
});

export const { showLoading, hideLoading, handleSearchChange } =
	allJobsSlice.actions;
export default allJobsSlice.reducer;
