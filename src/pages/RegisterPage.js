import React, { useState, useEffect } from "react";
import { Login, Register } from "../components";

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

	//change member
	const changeMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	//clear form every time isMember state changes
	// useEffect(() => {
	// 	setValues({
	// 		name: "",
	// 		email: "",
	// 		password: "",
	// 	});
	// }, [values.isMember]);

	return (
		<>
			{values.isMember ? (
				<Login
					values={values}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					changeMember={changeMember}
				/>
			) : (
				<Register
					values={values}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					changeMember={changeMember}
				/>
			)}
		</>
	);
};

export default RegisterPage;
