import React from "react";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/StatsContainer/StatsContainerWrapper";
import StatsItem from "./StatsItem";
const StatsContainer = () => {
	const { stats } = useSelector((store) => store.allJobs);
	const defaultStats = [
		{
			title: "pending applications",
			count: stats.pending || 0,
			icon: <FaSuitcaseRolling />,
			color: "#e9b949",
			bcg: "#fcefc7",
		},
		{
			title: "interviews scheduled",
			count: stats.interview || 0,
			icon: <FaCalendarCheck />,
			color: "#647acb",
			bcg: "#e0e8f9",
		},
		{
			title: "declined applications",
			count: stats.declined || 0,
			icon: <FaBug />,
			color: "#d66a6a",
			bcg: "#ffeeee",
		},
	];
	return (
		<Wrapper>
			{defaultStats.map((item, index) => {
				return <StatsItem key={index} {...item} />;
			})}
		</Wrapper>
	);
};

export default StatsContainer;
