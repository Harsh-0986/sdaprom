import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import {signOut} from 'next-auth/react'

export default function Header({user}) {
	return (
		<header className="text-gray-400 bg-gray-900 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<Image
						alt="Logo"
						width={100}
						height={100}
						src="/logo.jpg"
					/>
				</a>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
					<span className="ml-3 text-xl text-white font-semibold hidden md:inline">
						SDA Prom
					</span>
				</nav>
				<button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white font-bold" onClick={signOut}>
					<FiUsers className="mr-2" /> {user}
				</button>
			</div>
		</header>
	);
}
