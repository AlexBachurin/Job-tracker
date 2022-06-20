import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
	const dispatch = useDispatch();
	//invoke stats on page load
	useEffect(() => {
		dispatch(getStats());
		//eslint-disable-next-line
	}, []);
	return <div>Stats</div>;
};

export default Stats;
