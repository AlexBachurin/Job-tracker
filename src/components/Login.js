import React from "react";
import { FormRow } from "../components";

const Login = ({ values, handleChange, changeMember }) => {
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
			<button className="btn btn-block" type="submit">
				Submit
			</button>
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
