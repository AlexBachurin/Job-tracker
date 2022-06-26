import React from "react";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer/JobsContainerWrapper";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
	const { jobs, isLoading, page, totalJobs, numOfPages } = useSelector(
		(store) => store.allJobs
	);
	const dispatch = useDispatch();

	//get all jobs from server on page load
	useEffect(() => {
		dispatch(getAllJobs());
		//eslint-disable-next-line
	}, []);

	//if loading show spinner
	if (isLoading) {
		return <Loading center={true} />;
	}
	//if no jobs found display msg
	if (jobs.length === 0) {
		return <Wrapper>No Jobs to display</Wrapper>;
	}
	return (
		<Wrapper>
			{/* add s to end end if there is more than 1 job */}
			<h5>
				{totalJobs} job{jobs.length > 1 && "s"} found
			</h5>
			<div className="jobs">
				{jobs.map((item) => {
					return <Job key={item._id} {...item} />;
				})}
			</div>
			{/* only display pagination if there is more than 1 pages */}
			{numOfPages > 1 ? <PageBtnContainer /> : null}
		</Wrapper>
	);
};

export default JobsContainer;
