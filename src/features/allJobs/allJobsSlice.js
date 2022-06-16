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

const allJobsSlice = createSlice({
	name: "allJobs",
	initialState,
	extraReducers: {
		[getAllJobs.pending]: (state) => {
			state.isLoading = true;
		},
		[getAllJobs.fulfilled]: (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
			const { jobs, numOfPages, totalJobs } = action.payload;
			state.jobs = jobs;
			state.numOfPages = numOfPages;
			state.totalJobs = totalJobs;
		},
		[getAllJobs.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action.payload);
		},
	},
});

export default allJobsSlice.reducer;
