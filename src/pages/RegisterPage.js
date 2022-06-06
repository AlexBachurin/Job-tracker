import React, { useState, useEffect } from "react";
import { Login, Register } from "../components";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/Register/Register";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const RegisterPage = () => {
	const [values, setValues] = useState(initialState);

	const { user, isLoading } = useSelector((store) => store.user);
	const dispatch = useDispatch();

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
		const { name, isMember, email, password } = values;
		if ((!name && !isMember) || !email || !password) {
			toast.error("Please Fill Out All Fields");
			return;
		}
		//if user is member already dispatch login
		if (isMember) {
			dispatch(loginUser({ email, password }));
			return;
		}
		//if not dispatch register
		dispatch(registerUser({ name, email, password }));
	};

	//change member
	const changeMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
				{values.isMember ? (
					<Login
						values={values}
						handleChange={handleChange}
						changeMember={changeMember}
						isLoading={isLoading}
					/>
				) : (
					<Register
						values={values}
						handleChange={handleChange}
						changeMember={changeMember}
						isLoading={isLoading}
					/>
				)}
			</form>
		</Wrapper>
	);
};

export default RegisterPage;
