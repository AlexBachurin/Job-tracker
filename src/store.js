import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
//create store and export
export const store = configureStore({
	reducer: {
		user: userSlice,
		job: jobSlice,
	},
});
