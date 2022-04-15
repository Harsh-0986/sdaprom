import {useEffect, useState} from "react";
import ListBox from "./ListBox";
import { useSession } from "next-auth/react";
import {collection, addDoc, doc, updateDoc, getDocs} from "firebase/firestore";
import { db } from "../firebase";
import {toast} from "react-hot-toast";

const VoteForm = ({  kings, queens }) => {
	const { data: session } = useSession();
	const [email, setEmail] = useState(session.user.email);
	const kingVote = localStorage.getItem("prom_king").toString();
	const queenVote = localStorage.getItem("prom_queen").toString();
	const [voted, setVoted] = useState(localStorage.getItem('voted') || false)

	let obj = {}

	const king = kings;
	const queen = queens;


	const setVote = async (e) => {
		e.preventDefault();
		obj[`${email}`] = null
		console.log(obj)
		updateDoc(doc(db, "kings", `${kingVote}`), obj).then(
			() => {toast.success("Vote success")}
		).catch(e => {toast.error('An error occurred.Try again after sometime.')});

		updateDoc(doc(db, "queens", `${queenVote}`), obj).then(
			() => {toast.success("Vote success")}
		).catch(e => {toast.error('An error occurred.Try again after sometime.')});
		obj = {}

		obj[email] = true
		addDoc(collection(db, 'voters'), obj).then(()=>{
			toast.success('Thank you for voting')
			setVoted(true)
			localStorage.setItem('voted', voted)
		}).catch(e => toast.error('An error occured.Try again later'))
		obj = {}
	};

	let voters = []

	return (
		<>
			<span className="flex flex-col items-center text-white text-3xl font-semibold m-0 p-0 mb-12">
				Vote for the best, <br /> and forget the rest!
			</span>
			<form>
				<div className="relative z-0 mb-6 group ">
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						name="floating_email"
						className="mx-12 block py-2.5 px-0 w-[80%] md:w-[75%]  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_email"
						className="mx-12 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email address
					</label>
				</div>
				{!voted && (<div className="flex flex-col md:flex-row">
					<ListBox people={king} tagline="Prom King" />
					<div className="w-[0.1rem]" />
					<ListBox people={queen} tagline="Prom Queen" />
				</div>)}
				{!voted && (<div className="w-full flex flex-row justify-center align-center">
					<button
						className="w-1/2 px-5 py-3 my-2 bg-blue-500 hover:bg-blue-700 m-12 text-white font-semibold text-lg rounded-sm"
						onClick={async (e) => {
							await setVote(e);
						}}
					>
						Submit
					</button>
				</div>)}
				{voted && <span className='mx-12 md:mx-0 text-4xl text-white font-semibold flex flex-row justify-center align-center'>You can vote only once!</span> }
			</form>
		</>
	);
};

export default VoteForm;
