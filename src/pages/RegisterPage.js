import React, { useState, useEffect, useRef } from "react";
import { Login, Register } from "../components";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/Register/Register";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const RegisterPage = () => {
	const [values, setValues] = useState(initialState);
	const formRef = useRef(null);
	const handleChange = (e) => {
		//get targetted row name and set input value to state
		const rowName = e.target.name;
		const value = e.target.value;
		setValues((oldValues) => {
			return { ...oldValues, [rowName]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			(!values.name && !values.isMember) ||
			!values.email ||
			!values.password
		) {
			console.log("please fill all fields");
			return;
		}
	};

	//change member
	const changeMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	// clear form every time isMember state changes
	// useEffect(() => {
	// 	setValues(initialState);
	// }, [values.isMember]);

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
				{values.isMember ? (
					<Login
						values={values}
						handleChange={handleChange}
						changeMember={changeMember}
					/>
				) : (
					<Register
						values={values}
						handleChange={handleChange}
						changeMember={changeMember}
					/>
				)}
			</form>
		</Wrapper>
	);
};

export default RegisterPage;
