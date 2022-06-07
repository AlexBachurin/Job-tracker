import { LandingPage, ErrorPage, RegisterPage, ProtectedRoute } from "./pages";
import {
	Profile,
	AddJob,
	AllJobs,
	Stats,
	SharedLayout,
} from "./pages/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-job" element={<AddJob />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="landing" element={<LandingPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<ToastContainer position="top-center" autoClose={4000} />
		</BrowserRouter>
	);
}

export default App;
