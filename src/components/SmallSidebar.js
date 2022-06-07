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

	const toggle = () => {};
	return (
		<Wrapper>
			<div
				className={`sidebar-container ${isSidebarOpen ? "show-sidebar" : null}`}
			>
				<div className="content">
					<button
						className="close-btn"
						onClick={() => dispatch(toggleSidebar())}
					>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggleSidebar} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
