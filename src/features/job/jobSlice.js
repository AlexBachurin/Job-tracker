import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customUrl from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logoutUser } from "../user/userSlice";

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
			return { ...initialState };
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
	},
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
