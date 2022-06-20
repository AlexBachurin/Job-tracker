import React from "react";

import { FormRow } from "../components";
import DemoButton from "./DemoButton";

const Login = ({ values, handleChange, changeMember, isLoading }) => {
	return (
		<>
			<h3>Login</h3>
			{/* email field */}
			<FormRow
				type="email"
				name="email"
				value={values.email}
				handleChange={handleChange}
				labelText="Email"
			/>
			{/* password field */}
			<FormRow
				type="password"
				name="password"
				value={values.password}
				handleChange={handleChange}
				labelText="Password"
			/>
			<button className="btn btn-block" type="submit" disabled={isLoading}>
				{isLoading ? "Loading..." : "Submit"}
			</button>
			<DemoButton isLoading={isLoading} />
			<div>
				<p>
					Not a member yet?
					{
						<button onClick={changeMember} className="member-btn">
							Register
						</button>
					}
				</p>
			</div>
		</>
	);
};

export default Login;
