import { PieChart } from "react-minimal-pie-chart";

const Piechart = () => {
	return (
		<div className="bg-gray-900 h-72">
			<PieChart
				data={[
					{ title: "One", value: 10, color: "#E38627" },
					{ title: "Two", value: 15, color: "#C13C37" },
					{ title: "Three", value: 20, color: "#6A2135" },
				]}
			/>
		</div>
	);
};

export default Piechart;
