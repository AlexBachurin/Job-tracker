import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customUrl } from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
	isLoading: false,
	position: "",
	company: "",
	jobLocation: "",
	jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
	defaultJobType: "full-time",
	statusOptions: ["interview", "declined", "pending"],
	defaultStatus: "pending",
	isEditing: false,
	editJobId: "",
};

const jobSlice = createSlice({
	name: "job",
	initialState,
});

export default jobSlice.reducer;
