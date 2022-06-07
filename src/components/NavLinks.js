import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggle }) => {
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
						key={id}
						onClick={toggle}
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
