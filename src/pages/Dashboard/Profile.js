import React from "react";
import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardForm/DashboardForm";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
	const { isLoading, user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	//state for user data
	const [userData, setUserData] = useState({
		name: user?.name || "",
		email: user?.email || "",
		lastName: user?.lastName || "",
		location: user?.location || "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, lastName, location } = userData;
		if (!name || !email || !lastName || !location) {
			toast.error("please fill all fields");
			return;
		}

		dispatch(updateUser(userData));
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		//dynamically change filled data
		setUserData({ ...userData, [name]: value });
	};
	return (
		<Wrapper>
			<form className="form" onSubmit={handleSubmit}>
				<h3>profile</h3>
				<div className="form-center">
					<FormRow
						type="text"
						name="name"
						value={userData.name}
						handleChange={handleChange}
						labelText="name"
					/>
					<FormRow
						type="text"
						name="lastName"
						value={userData.lastName}
						handleChange={handleChange}
						labelText="last name"
					/>
					<FormRow
						type="email"
						name="email"
						value={userData.email}
						handleChange={handleChange}
						labelText="email"
					/>
					<FormRow
						type="text"
						name="location"
						value={userData.location}
						handleChange={handleChange}
						labelText="location"
					/>
					<button className="btn btn-block" type="submit" disabled={isLoading}>
						{isLoading ? "Applying changes" : "Save Changes"}
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default Profile;
