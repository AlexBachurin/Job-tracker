import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";
const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt="job-tracker" />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Poutine bushwick neutra actually umami sustainable banjo pickled.
						Marfa neutra williamsburg yr art party mlkshk glossier bicycle
						rights unicorn master cleanse +1. Pour-over pinterest mustache, chia
						hoodie shabby chic tattooed. Iceland everyday carry raw denim
						wayfarers flannel. Cloud bread vape narwhal, gastropub chia
						vexillologist street art retro williamsburg. Typewriter DSA tousled,
						beard iPhone kitsch paleo etsy kale chips 3 wolf moon franzen XOXO
						master cleanse.
					</p>
					<button className="btn btn-hero">Login/Register</button>
				</div>
				<img src={main} className="main-img" alt="main-img" />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	nav {
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -4rem;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
	}
	p {
		color: var(--grey-600);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			grid-gap: 3rem;
			justify-items: center;
		}
		.main-img {
			display: block;
			width: 400px;
			object-fit: cover;
			height: auto;
		}
	}
`;

export default Landing;
