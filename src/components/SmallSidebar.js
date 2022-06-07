import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Logo } from "./";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";
const SmallSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);
	const dispatch = useDispatch();
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
					<div className="nav-links">
						{links.map((link) => {
							const { id, text, path, icon } = link;
							// make link active by using isActive NavLnik functionality
							return (
								<NavLink
									to={path}
									className={({ isActive }) => {
										return isActive ? "nav-link active" : "nav-link";
									}}
									id={id}
								>
									<span className="icon">{icon}</span>
									{text}
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
