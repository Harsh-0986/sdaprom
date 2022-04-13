import { useState } from "react";

const data = [{ name: "Hars1h" }, { name: "Harsh" }];

const VoteForm = () => {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		<>
			<span className="flex flex-col items-center text-white text-3xl font-semibold m-0 p-0 mb-12">
				Vote for the best, <br /> and forget the rest!
			</span>
			<form>
				<div className="relative z-0 mb-6 group mx-12 ">
					<input
						type="email"
						name="floating_email"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_email"
						className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email address
					</label>
				</div>
			</form>
		</>
	);
};

export default VoteForm;
