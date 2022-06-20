import React from "react";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
const DemoButton = ({ isLoading }) => {
	const dispatch = useDispatch();
	return (
		<button
			className="btn btn-block btn-hipster"
			type="button"
			disabled={isLoading}
			onClick={() =>
				dispatch(loginUser({ email: "testUser@test.com", password: "secret" }))
			}
		>
			{isLoading ? "Loading..." : "demo test"}
		</button>
	);
};

export default DemoButton;
