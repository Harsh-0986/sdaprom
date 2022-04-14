import Head from "next/head";
import Image from "next/image";
import app, { db } from "../firebase";
import Header from "../components/Header";
import Details from "../components/Details";
import Piechart from "../components/PieChart";
import VoteForm from "../components/VoteForm";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useSession  } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	// console.log(session)

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

			{/* Header */}
			<Header user={session?.user?.name} />
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
