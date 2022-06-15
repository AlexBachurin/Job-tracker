import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customUrl from "../../utils/axios";
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "../../utils/localStorage";

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
		try {
			const resp = await customUrl.post("/auth/register", user);
			return resp.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data.msg);
		}
	}
);

//login thunk
export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thunkApi) => {
		try {
			const resp = await customUrl.post("/auth/login", user);
			return resp.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.response.data.msg);
		}
	}
);

//update user Thunk
export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkApi) => {
		try {
			const resp = await customUrl.patch("/auth/updateUser", user, {
				headers: {
					authorization: `Bearer ${thunkApi.getState().user.user.token}`,
					// authorization: `Bearer `,
				},
			});
			return resp.data;
		} catch (error) {
			console.log(error.response);
			//if something wrong with authentication then logout user immediately
			if (error.response.status === 401) {
				thunkApi.dispatch(logoutUser());
				return thunkApi.rejectWithValue(error.response.data.msg);
			}
			return thunkApi.rejectWithValue(error.response.data.msg);
		}
	}
);

//create slice
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		// logout
		logoutUser: (state) => {
			state.user = null;
			state.isSidebarOpen = false;
			removeUserFromLocalStorage();
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
			console.log(payload);
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
	},
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
