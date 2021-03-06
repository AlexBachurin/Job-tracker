import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

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
export const createJob = createAsyncThunk("job/createJob", createJobThunk);
//delete job
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);
// EDIT JOB
export const editJob = createAsyncThunk("job/editJob", editJobThunk);

//SLICE
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
		//edit job
		setEditJob: (state, action) => {
			//override state and place editing to true
			return { ...state, isEditing: true, ...action.payload };
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
		[editJob.pending]: (state) => {
			state.isLoading = true;
		},
		[editJob.fulfilled]: (state, action) => {
			state.isLoading = false;
			// state.isEditing = false;
			toast.success("Job info updated");
		},
		[editJob.rejected]: (state, action) => {
			state.isLoading = false;
			// state.isEditing = false;
			toast.error(action.payload);
		},
	},
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
