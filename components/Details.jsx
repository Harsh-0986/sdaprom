import Image from "next/image";

const Details = () => {
	return (
		<section className="text-gray-400 bg-gray-900 body-font  ">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					<div className="h-full text-center">
						<Image
							alt="testimonial"
							src="https://instagram.famd1-3.fna.fbcdn.net/v/t51.2885-19/277506683_468154035041520_8297770940930566848_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.famd1-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Y5Tj3g8h7NYAX-XvKe3&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_OcOl9TaxW4IToPoBe0c_IOgIlbBnolLAQnRZLxVT2xQ&oe=625A16B7&_nc_sid=7bff83"
							width="300"
							height="300"
						/>
						<p className="leading-relaxed mt-5">
							Edison bulb retro cloud bread echo park, helvetica
							stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
							Single-origin coffee ennui shaman taiyaki vape DIY
							tote bag drinking vinegar cronut adaptogen squid
							fanny pack vaporware.
						</p>
						<span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Details;
