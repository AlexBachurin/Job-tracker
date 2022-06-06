import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	isLoading: false,
	user: null,
};

//register thunk
export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thunkApi) => {
		console.log(`Register user : ${user}`);
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
});

export default userSlice.reducer;
