import React from "react";
import Wrapper from "../assets/wrappers/PageBtnContainer/PageBtnContainerWrapper";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
const PageBtnContainer = () => {
	const { numOfPages, page } = useSelector((store) => store.allJobs);
	const dispatch = useDispatch();

	//create array of pages based on how many pages we receive from server
	const pagesArr = Array.from({ length: numOfPages }, (_, index) => {
		//return index + 1, so array will be like [1,2,3,4,5 ... etc]
		return index + 1;
	});
	//change page on click
	const handlePage = (e) => {
		console.log(`change page to ${e.target.value}`);
	};

	//next page
	const nextPage = () => {
		console.log("next page");
	};
	//prev page
	const prevPage = () => {
		console.log("prev page");
	};

	return (
		<Wrapper>
			<button type="button" className="prev-btn" onClick={prevPage}>
				<HiChevronDoubleLeft />
				prev
			</button>
			<div className="btn-container">
				{pagesArr.map((pageNum) => {
					return (
						<button
							type="button"
							key={pageNum}
							onClick={handlePage}
							//  if current iterated page equals page in state then add active class to it
							className={pageNum === page ? "active pageBtn" : "pageBtn"}
						>
							{pageNum}
						</button>
					);
				})}
			</div>
			<button type="button" className="next-btn" onClick={nextPage}>
				<HiChevronDoubleRight />
				next
			</button>
		</Wrapper>
	);
};

export default PageBtnContainer;
