import { LandingPage, ErrorPage, Dashboard, RegisterPage } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="landing" element={<LandingPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<ToastContainer position="top-center" autoClose={4000} />
		</BrowserRouter>
	);
}

export default App;
