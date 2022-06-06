import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";

//create store and export
export const store = configureStore({
	reducer: {
		user: userSlice,
	},
});
