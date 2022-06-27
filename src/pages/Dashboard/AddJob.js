import React, { useEffect } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardForm/DashboardForm";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "../../components/FormRowSelect";
import {
	clearValues,
	createJob,
	editJob,
	handleChange,
} from "../../features/job/jobSlice";
const AddJob = () => {
	const {
		isLoading,
		position,
		company,
		jobLocation,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		isEditing,
		editJobId,
	} = useSelector((store) => store.job);
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store.user);

	//submit
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!position || !company || !jobLocation) {
			toast.error("Please fill all fields");
			return;
		}
		if (isEditing) {
			dispatch(
				editJob({
					jobId: editJobId,
					job: { position, company, jobLocation, jobType, status },
				})
			);
			return;
		}
		dispatch(createJob({ position, company, jobLocation, jobType, status }));
	};
	//handle input
	const handleJobInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch(handleChange({ name, value }));
	};

	//clear inputs
	const clearInputs = () => {
		dispatch(clearValues());
	};

	//add location of user automatically on opening page(optional)
	useEffect(() => {
		//only add default location if we not editing
		if (!isEditing) {
			dispatch(handleChange({ name: "jobLocation", value: user.location }));
		}
		//eslint-disable-next-line
	}, []);
	return (
		<Wrapper>
			<form className="form">
				<h3>{isEditing ? "edit job" : "add job"}</h3>
				<div className="form-center">
					{/* position */}
					<FormRow
						type="text"
						name="position"
						labelText="position"
						value={position}
						handleChange={handleJobInput}
					/>
					{/* company */}
					<FormRow
						type="text"
						name="company"
						labelText="company"
						value={company}
						handleChange={handleJobInput}
					/>
					{/* location */}
					<FormRow
						type="text"
						name="jobLocation"
						labelText="job location"
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					{/* status */}
					<FormRowSelect
						labelText="status"
						value={status}
						name="status"
						list={statusOptions}
						handleChange={handleJobInput}
					/>
					{/* job type */}
					<FormRowSelect
						labelText="job type"
						value={jobType}
						name="jobType"
						list={jobTypeOptions}
						handleChange={handleJobInput}
					/>
					{/* buttons */}
					<div className="btn-container">
						<button
							className="btn btn-block clear-btn"
							type="button"
							onClick={clearInputs}
						>
							clear
						</button>
						<button
							className="btn btn-block submit-btn"
							type="submit"
							onClick={handleSubmit}
							disabled={isLoading}
						>
							{isEditing ? "edit" : "submit"}
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default AddJob;
