import React from "react";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer/JobsContainerWrapper";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
	const { jobs, isLoading } = useSelector((store) => store.allJobs);
	const dispatch = useDispatch();

	//get all jobs from server on page load
	useEffect(() => {
		dispatch(getAllJobs());
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
			<div className="jobs">
				{jobs.map((item) => {
					return <Job key={item._id} {...item} />;
				})}
			</div>
		</Wrapper>
	);
};

export default JobsContainer;
