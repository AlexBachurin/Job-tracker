import React from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/Register/Register";

const Login = ({ values, handleSubmit, handleChange, changeMember }) => {
	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
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
					{values.isMember ? (
						<p>
							Already a member?
							{
								<button onClick={changeMember} className="member-btn">
									Login
								</button>
							}
						</p>
					) : (
						<p>
							Not a member yet?
							{
								<button onClick={changeMember} className="member-btn">
									Register
								</button>
							}
						</p>
					)}
				</div>
			</form>
		</Wrapper>
	);
};

export default Login;
