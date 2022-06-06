import React from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/Register/Register";

const Register = ({ values, handleSubmit, handleChange, changeMember }) => {
	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
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
				<button className="btn btn-block" type="submit">
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
			</form>
		</Wrapper>
	);
};

export default Register;
