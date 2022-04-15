import { PieChart } from "react-minimal-pie-chart";

const Chart = ({ pieData }) => {
	return (
		<div className='h-[55vh]'>
		<PieChart
			data={pieData}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={{ fontSize: "3.5px",  }}
		/></div>
	);
};

export default Chart;
