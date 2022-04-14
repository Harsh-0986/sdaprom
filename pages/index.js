import Head from "next/head";
import Image from "next/image";
import app, { db } from "../firebase";
import Header from "../components/Header";
import Details from "../components/Details";
import Piechart from "../components/PieChart";
import VoteForm from "../components/VoteForm";
import Footer from "../components/Footer";

export default function Home() {
	console.log(app);
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

			{/* Header */}
			<Header />
			<Details />
			{/* Pie chart */}
			<Piechart tagline="Prom King" />
			<Piechart tagline="Prom Queen" />
			{/* Vote form */}
			<VoteForm />
			{/* Footer */}
			<Footer />
		</div>
	);
}
