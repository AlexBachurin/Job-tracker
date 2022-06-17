import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customUrl from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logoutUser } from "../user/userSlice";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
const initialState = {
	isLoading: false,
	position: "",
	company: "",
	jobLocation: "",
	jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
	jobType: "full-time",
	statusOptions: ["interview", "declined", "pending"],
	status: "pending",
	isEditing: false,
	editJobId: "",
};
//create job thunk
export const createJob = createAsyncThunk(
	"job/createJob",
	async (job, thunkApi) => {
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
	}
);
//delete job
export const deleteJob = createAsyncThunk(
	"job/deleteJob",
	async (jobId, thunkApi) => {
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
	}
);

const jobSlice = createSlice({
	name: "job",
	initialState,
	reducers: {
		//we pass here name of current input and value and change it in state accordingly
		handleChange: (state, action) => {
			const { name, value } = action.payload;
			state[name] = value;
		},
		//clear values
		clearValues: () => {
			//if we clear values we want to still save user location so using spread and set location from local storage
			return {
				...initialState,
				jobLocation: getUserFromLocalStorage()?.location,
			};
		},
	},
	extraReducers: {
		[createJob.pending]: (state) => {
			state.isLoading = true;
		},
		[createJob.fulfilled]: (state) => {
			state.isLoading = false;
			toast.success("Job created");
		},
		[createJob.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action.payload);
		},
		[deleteJob.fulfilled]: (state, action) => {
			toast.success(action.payload);
		},
		[deleteJob.rejected]: (state, action) => {
			toast.error(action.payload);
		},
	},
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
