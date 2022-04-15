import Image from "next/image";

const Footer = () => {
	return (
		<footer className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
					<Image
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						src="/logo.jpg"
						alt="Logo"
						width="100"
						height="100"
					/>
					<span className="ml-3 text-xl">SDA Prom</span>
				</a>
				<p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
					© 2022 SdaProm
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a className="ml-3 text-gray-400" href='https://instagram.com/'>
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<rect
								width="20"
								height="20"
								x="2"
								y="2"
								rx="5"
								ry="5"
							></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
