import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar/SmallSidebar";
import { FaTimes } from "react-icons/fa";

import { Logo } from "./";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	//create separate function to pass in NavLinks since we dont wanna close sidebar in big size
	const toggle = () => {
		dispatch(toggleSidebar());
	};
	return (
		<Wrapper>
			<div
				className={`sidebar-container ${isSidebarOpen ? "show-sidebar" : null}`}
			>
				<div className="content">
					<button className="close-btn" onClick={toggle}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggle={toggle} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
