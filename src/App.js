import { LandingPage, ErrorPage, Dashboard, RegisterPage } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="landing" element={<LandingPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
