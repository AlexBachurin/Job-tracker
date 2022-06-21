import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer/ChartsContainerWrapper";
import { BarChartComponent, AreaChartComponent } from "../components";
const ChartContainer = () => {
	const { monthlyApplications } = useSelector((store) => store.allJobs);
	const [barChart, setBarChart] = useState(true);
	return (
		<Wrapper>
			<h4>Monthly Applications</h4>
			<button type="button" onClick={() => setBarChart(!barChart)}>
				{barChart ? "Area Chart" : "Bar Chart"}
			</button>
			{barChart ? (
				<BarChartComponent data={monthlyApplications} />
			) : (
				<AreaChartComponent data={monthlyApplications} />
			)}
		</Wrapper>
	);
};

export default ChartContainer;
