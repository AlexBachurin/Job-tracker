import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customUrl from "../../utils/axios";

const initialState = {
	isLoading: false,
	user: null,
};

//register thunk
export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thunkApi) => {
		try {
			const resp = await customUrl.post("/auth/register", user);
			return resp.data;
		} catch (error) {
			console.log(error);
			thunkApi.rejectWithValue(error.response.data.msg);
		}
	}
);

//login thunk
export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thunkApi) => {
		console.log(`Login user : ${user}`);
	}
);

//create slice
const userSlice = createSlice({
	name: "user",
	initialState,
	// extraReducers
	extraReducers: {
		// pending state
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
		// sucess
		[registerUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.user = user;
			toast.success(`Hello ${user.name} `);
		},
		// error
		[registerUser.rejected]: (state, { payload }) => {
			console.log(payload);
			state.isLoading = false;
			toast.error(payload);
		},
	},
});

export default userSlice.reducer;
