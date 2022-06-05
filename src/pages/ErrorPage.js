import React from "react";
import Wrapper from "../assets/wrappers/Error/Error";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const ErrorPage = () => {
	return (
		<Wrapper className="full-page">
			<div>
				<img src={img} alt="not-found" />
				<h3>Ohh! page not found</h3>
				<p>There is nothing, but chickens &#9785;</p>
				<Link className="btn" to={"/"}>
					back home
				</Link>
			</div>
		</Wrapper>
	);
};

export default ErrorPage;
