import React from "react";
import { FormRow } from "../components";

const Register = ({ values, handleChange, changeMember, isLoading }) => {
	return (
		<>
			<h3>Register</h3>
			{/* name field */}
			<FormRow
				type="text"
				name="name"
				value={values.name}
				handleChange={handleChange}
				labelText="Name"
			/>
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
				Submit
			</button>
			<div>
				<p>
					Already a member?
					{
						<button onClick={changeMember} className="member-btn">
							Login
						</button>
					}
				</p>
			</div>
		</>
	);
};

export default Register;
