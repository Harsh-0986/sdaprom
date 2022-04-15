import Head from "next/head";
import Image from "next/image";
import app, { db } from "../firebase";
import Header from "../components/Header";
import Details from "../components/Details";
import Piechart from "../components/PieChart";
import VoteForm from "../components/VoteForm";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useSession } from "next-auth/react";
import {setDoc, doc, getDocs, collection} from "firebase/firestore";
import {Toaster} from "react-hot-toast";

export default function Home() {
	const { data: session } = useSession();

	// First time run

	const kings = [
		"Prince desai",
		"Vansh jivani",
		"Veer patel",
		"Bhavik agarwal",
		"Heet sanghvi",
		"Dhwanit jain",
		"Vyom singhal",
		"Harshit narang",
		"Sahil shah",
		"Zaib ali",
		"Mayank jain",
		"Manav motwani",
		"Yuvraj singh bhayal",
		"Tanay lumbhani",
		"Nayan jain",
		"Ajmal khan",
		"Sharnam chikhaliya",
		"Rishi bagrecha",
		"Dev gadhiya",
		"Shubham chopra",
		"Syed ali",
		"Dax tejani",
		"Rajveer masrani",
		"Akshat dodhiya",
		"Shubh soni",
		"Kartik rapaka",
		"Kaivanya bhandari",
		"Parth balchandani",
		"Dev desai ",
	];
	// kings.map(async (king) => {
	// 		// 	const ref = doc(db, 'queens', queen)
	// 	setDoc(ref, {})// })

	const queens = [
		"Vanshita savani",
		"Riya ribadia",
		"Divyanshi borsali",
		"Ananya mahajan",
		"Muskan jain",
		"Vanya bhatt",
		"Jessica jacob",
		"Verney morgan",
		"Ryena peteti",
		"Tisha mavani",
		"Jal shah",
		"Dhruvi savaliya",
		"Tisha bhagat",
		"Tanishka chopra",
		"Aastha jain",
		"Tanushka agarwal",
		"Zeal patel",
		"Aashi",
		"Sakshi katargamwala",
	];
	// queens.map(async (queen) => {
		// const ref = doc(db, 'queens', queen)
		// setDoc(ref, {})
	//

	let voters = []
	let i = 0

	const fetchVotes = async () => {
		const querySnapshot = await getDocs(collection(db, "voters"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			voters[i] = doc.data()
			i++
		});
	}

	fetchVotes()

	if (!session) {
		return <Login />;
	}

	return (
		<div>
			<Head>
				<title>Sda Prom 2022</title>
				<meta
					name="description"
					content="Sda prom for batches 2022, 23, 24"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Toaster positiion="top-center" />
			{/* Header */}
			<Header user={session?.user?.name} />
			<Details />
			{/* Pie chart */}
			<Piechart tagline="Prom King" king={true} kings={kings.sort()} voters={voters} />
			<Piechart tagline="Prom Queen" queen={true} queens={queens.sort()} voters={voters} />
			{/* Vote form */}
			<VoteForm kings={kings.sort()} queens={queens.sort()}  />
			{/* Footer */}
			<Footer />
		</div>
	);
}
