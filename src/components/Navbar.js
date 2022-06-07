import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar/NavbarWrapper";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Logo } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleSidebar } from "../features/user/userSlice";
const Navbar = () => {
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

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
					<button className="btn" onClick={() => toggleDropdown()}>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div
						className={`dropdown ${isDropdownOpen ? "show-dropdown" : null}`}
					>
						<button
							className="dropdown-btn"
							onClick={() => dispatch(logoutUser())}
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
