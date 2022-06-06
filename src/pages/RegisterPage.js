import React, { useState } from "react";
import styled from "styled-components";
import { Logo, FormRow } from "../components";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const RegisterPage = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		//get targetted row name and set input value to state
		console.log(e.target.name);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
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
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default RegisterPage;
