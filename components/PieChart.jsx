import { PieChart } from "react-minimal-pie-chart";

const Piechart = () => {
	return (
		<>
			<span className="flex flex-col items-center text-white text-3xl font-semibold m-0 p-0 md:mb-12">
				Prom King
			</span>
			<div className="bg-gray-900 h-96 md:mb-36 w-full flex flex-col items-center">
				<div className="flex flex-col items-center w-[75vw] h-[55vh]">
					<PieChart
						data={[
							{ title: "One", value: 10, color: "#E38627" },
							{ title: "Two", value: 15, color: "#C13C37" },
							{ title: "Three", value: 20, color: "#6A2135" },
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default Piechart;
