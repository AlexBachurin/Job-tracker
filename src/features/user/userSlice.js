import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
	clearStoreThunk,
	loginUserThunk,
	registerUserThunk,
	updateUserThunk,
} from "./userThunk";

const initialState = {
	isLoading: false,
	// check if user already exists on app load
	user: getUserFromLocalStorage(),
	//sidebar
	isSidebarOpen: false,
};

//register thunk
export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thunkApi) => {
		return registerUserThunk("/auth/register", user, thunkApi);
	}
);

//login thunk
export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thunkApi) => {
		return loginUserThunk("/auth/login", user, thunkApi);
	}
);

//update user Thunk
export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkApi) => {
		return updateUserThunk("/auth/updateUser", user, thunkApi);
	}
);

//full clear store
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

//create slice
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		// logout
		logoutUser: (state, action) => {
			state.user = null;
			state.isSidebarOpen = false;
			removeUserFromLocalStorage();
			//if we have some message in payload then show toast, if not just logout
			if (action.payload) {
				toast.success(action.payload);
			}
		},
	},
	// extraReducers
	extraReducers: {
		// Register
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
		// sucess
		[registerUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Hello ${user.name} `);
		},
		// error
		[registerUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		// LOGIN
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		//sucess
		[loginUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Welcome back ${state.user.name}`);
		},
		//error
		[loginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		// Update
		[updateUser.pending]: (state) => {
			state.isLoading = true;
		},
		//sucess
		[updateUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Changes successfully saved`);
		},
		//error
		[updateUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		//clear store reject
		[clearStore.rejected]: () => {
			toast.error("error occured");
		},
	},
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
