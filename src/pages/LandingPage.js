import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Landing/Landing";
import { Link } from "react-router-dom";
const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
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
					<Link to={"/register"} className="btn btn-hero">
						Login/Register{" "}
					</Link>
				</div>
				<img src={main} className="main-img" alt="main-img" />
			</div>
		</Wrapper>
	);
};

export default LandingPage;
