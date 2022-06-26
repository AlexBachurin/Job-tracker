import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customUrl from "../../utils/axios";
import { getAllJobsThunk, getStatsThunk } from "./allJobsThunk";

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
export const getAllJobs = createAsyncThunk("allJobs/getJobs", getAllJobsThunk);

//get stats thunk
export const getStats = createAsyncThunk("allJobs/getStats", getStatsThunk);

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
			//change page to 1 to avoid bugs(if we on page 8 and type something in search
			// that return only 2 pages jobs will not be displayed)
			state.page = 1;
			state[name] = value;
		},
		//clear filters
		clearFilters: () => {
			return { ...initialState };
		},
		//next page
		nextPageHandler: (state) => {
			if (state.page >= state.numOfPages) {
				state.page = 1;
			} else {
				state.page = state.page + 1;
			}
		},
		// prev page
		prevPageHandler: (state) => {
			if (state.page <= 1) {
				state.page = state.numOfPages;
			} else {
				state.page = state.page - 1;
			}
		},
		// change page on click in payload we get number of page
		changePageHandler: (state, { payload }) => {
			state.page = payload;
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

export const {
	showLoading,
	hideLoading,
	handleSearchChange,
	clearFilters,
	nextPageHandler,
	prevPageHandler,
	changePageHandler,
} = allJobsSlice.actions;
export default allJobsSlice.reducer;
