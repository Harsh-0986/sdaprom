import Image from "next/image";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
	return (
		<header className="text-gray-400 bg-gray-900 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<Image
						alt="Logo"
						width={100}
						height={100}
						src="https://instagram.famd1-3.fna.fbcdn.net/v/t51.2885-19/277506683_468154035041520_8297770940930566848_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.famd1-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Y5Tj3g8h7NYAX-XvKe3&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_OcOl9TaxW4IToPoBe0c_IOgIlbBnolLAQnRZLxVT2xQ&oe=625A16B7&_nc_sid=7bff83"
					/>
				</a>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
					<span className="ml-3 text-xl text-white font-semibold hidden md:inline">
						SDA Prom
					</span>
				</nav>
				<button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white font-bold">
					Login <FiLogIn className="ml-2" />
				</button>
			</div>
		</header>
	);
}
