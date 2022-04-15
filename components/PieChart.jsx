import { db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
import Chart from "./Chart";

const Piechart = ({ tagline, king, queen, kings, queens, voters }) => {
	let arr = [];
	let dataFetcher = "";
	let i = 0;

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const [pieData, setPieData] = useState([]);

	if (king) {
		dataFetcher = "kings";
	} else {
		dataFetcher = "queens";
	}


	async function getData() {
		const querySnapshot = await getDocs(collection(db, dataFetcher))

		 // const querySnapshot = await getDocs(collection(db, dataFetcher``))
		querySnapshot.forEach((doc) => {
			arr[i] = {
				value: Object.keys(doc.data()).length,
				title: dataFetcher === "kings" ? kings[i] : queens[i],
				color: getRandomColor(),
			};
			i++
		});
	}

	getData();

	let votes

	useEffect(() => {
		votes = Object.keys(voters).length
		new Promise(resolve => setTimeout(resolve, 1000))
		setPieData(arr)
	}, []);


	new Promise((r) => setTimeout(r, 1000))
		.then(() => null)
		.catch((e) => console.log(e));

	return (
		<>
			<span className="flex flex-col items-center text-white text-3xl font-semibold m-0 p-0 md:mb-12">
				{tagline}
			</span>
			<div className={`bg-gray-900 ${pieData.length === 0 ? 'm-2 md:h-12' : 'h-96'} md:mb-36  flex  flex-col items-center`}>


				<div className="flex flex-col items-center w-[75vw] h-[45vh] md:h-[55vh]">
					{pieData.length === 0 &&(<div className='text-white text-4xl font-semibold flex flex-col md:flex-row justify-center align-center mt-2'>Too less votes to plot a graph</div>)}
					{/*(<Chart pieData={pieData} />)}*/}
				</div>
			</div>
		</>
	);
};

export default Piechart;
