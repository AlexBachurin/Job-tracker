import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Logo } from "./";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
const SmallSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	return (
		<Wrapper>
			<div className="sidebar-container show-sidebar">
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
					<div className="nav-links">nav links</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
