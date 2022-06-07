import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar/NavbarWrapper";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Logo } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
const Navbar = () => {
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<div className="nav-center">
				<button
					className="toggle-btn"
					onClick={() => dispatch(toggleSidebar())}
				>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">dashboard</h3>
				</div>
				<div className="btn-container">
					<button
						className="btn"
						onClick={() => console.log("toggle dropdown")}
					>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div className="dropdown show-dropdown">
						<button
							className="dropdown-btn"
							onClick={() => console.log("logout user")}
						>
							logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
