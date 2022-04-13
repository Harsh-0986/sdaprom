import Image from "next/image";

const Details = () => {
	return (
		<section className="text-gray-400 bg-gray-900 body-font  ">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					<div className="h-full text-center">
						<Image
							alt="testimonial"
							src="/details.jpg"
							width="300"
							height="300"
						/>
						<p className="leading-relaxed mt-5 mx-12">
							Sda prom x grad is going to be the most exclusive
							event ever happened in years. This is going to be a
							crazy night. Living through the experience of ball
							is in your hands. I swear you are going to feel
							handsdown for this event.
						</p>
						<span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Details;
