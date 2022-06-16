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
	reducers: {
		//we pass here name of current input and value and change it in state accordingly
		handleChange: (state, action) => {
			const { name, value } = action.payload;
			state[name] = value;
		},
	},
});

export const { handleChange } = jobSlice.actions;
export default jobSlice.reducer;
