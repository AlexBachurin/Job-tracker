import React from "react";
import Wrapper from "../assets/wrappers/SearchContainer/SearchContainerWrapper";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, FormRowSelect } from "../components";
const SearchContainer = () => {
	const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
		useSelector((store) => store.allJobs);
	const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
	const dispatch = useDispatch();
	//search
	const handleSearch = (e) => {
		e.preventDefault();
	};
	//submit
	const submitForm = (e) => {
		e.preventDefault();
	};
	return (
		<Wrapper>
			<form className="form">
				<h4>search form</h4>
				<div className="form-center">
					{/* search pos */}
					<FormRow
						type="text"
						name="search"
						value={search}
						handleChange={handleSearch}
						labelText="Search"
					/>
					{/* status */}
					<FormRowSelect
						labelText="status"
						value={searchStatus}
						name="searchStatus"
						list={["all", ...statusOptions]}
						handleChange={handleSearch}
					/>
					{/* Type */}
					<FormRowSelect
						labelText="type"
						value={searchType}
						name="searchType"
						list={["all", ...jobTypeOptions]}
						handleChange={handleSearch}
					/>
					{/* sort */}
					<FormRowSelect
						labelText="Sort"
						value={sort}
						name="sort"
						list={sortOptions}
						handleChange={handleSearch}
					/>
					<button type="submit" className="btn btn-block btn-danger">
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default SearchContainer;
