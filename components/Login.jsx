import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/react";
import Head from "next/head";

function Login() {
	return (
		<>
			<Head>
				<title>SDA Prom</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<p className=" flex flex-col justify-center align-center ml-2 mt-2 font-semibold font-Gowun text-5xl text-white text-left">
					SDA Prom <br/><span className='flex flex-row justify-center align-center'> 2022</span>
				</p>
				<Button
					className="w-72 h-30 text-base mt-10 font-STIX"
					color="blue"
					buttonType="filled"
					riple="light"
					onClick={signIn}
				>
					Log In with Google
				</Button>
			</div>
		</>
	);
}

export default Login;
