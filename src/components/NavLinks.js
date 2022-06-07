import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavLinks = ({ toggleSidebar }) => {
	const dispatch = useDispatch();

	return (
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
						onClick={() => dispatch(toggleSidebar())}
					>
						<span className="icon">{icon}</span>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};

export default NavLinks;
