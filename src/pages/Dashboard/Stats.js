import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartContainer from "../../components/ChartContainer";
import Loading from "../../components/Loading";
import StatsContainer from "../../components/StatsContainer";
import { getStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
	const { isLoading, monthlyApplications } = useSelector(
		(store) => store.allJobs
	);
	const dispatch = useDispatch();
	//invoke stats on page load
	useEffect(() => {
		dispatch(getStats());
		//eslint-disable-next-line
	}, []);
	if (isLoading) {
		return <Loading center={true} />;
	}
	return (
		<>
			<StatsContainer />
			{/* only display chart if we have something in array */}
			{monthlyApplications.length > 0 ? <ChartContainer /> : null}
		</>
	);
};

export default Stats;
