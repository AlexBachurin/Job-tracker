import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
const Landing = () => {
	return (
		<main>
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
				<img src={main} alt="main-img" />
			</div>
		</main>
	);
};

export default Landing;
