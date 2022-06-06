import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../components";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const RegisterPage = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		console.log(e.target);
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
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						name
					</label>
					<input
						type="text"
						name="name"
						value={values.name}
						onChange={handleChange}
						className="form-input"
					/>
				</div>
				<button className="btn btn-block" type="submit">
					Submit
				</button>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default RegisterPage;
