import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar/BigSidebarWrapper";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";
const BigSidebar = () => {
	const { isSidebarOpen } = useSelector((store) => store.user);
	return (
		<Wrapper>
			<div
				className={`sidebar-container ${isSidebarOpen ? null : "show-sidebar"}`}
			>
				<div className="content">
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
