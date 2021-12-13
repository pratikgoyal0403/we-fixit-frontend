export default function Features() {
	return (
		<div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center py-12 font-sans">
			<div className="mb-10 lg:mr-10">
				<h1 className="text-3xl md:text-4xl font-bold font-sans mb-5">
					Why We Fixit?
				</h1>
				<div className="flex items-center py-4 md:py-5">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"
						alt="features icons"
						className="w-10 md:w-16 mr-6"
					/>
					<div>
						<h1 className="font-semibold text-md md:text-lg">
							Transparent Pricing
						</h1>
						<p className="text-gray-500 mt-1 md:font-semibold text-xs md:text-sm">
							See fixed prices before you book. No hidden charges.
						</p>
					</div>
				</div>
				<div className="flex items-center py-4 md:py-5">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png"
						alt="features icons"
						className="w-10 md:w-16 mr-6"
					/>
					<div>
						<h1 className="font-semibold text-md md:text-lg">
							Experts only
						</h1>
						<p className="text-gray-500 mt-1 md:font-semibold text-xs md:text-sm">
							Our professionals are well trained and have on-job
							expertise.
						</p>
					</div>
				</div>
				<div className="flex items-center py-4 md:py-5">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png"
						alt="features icons"
						className="w-10 md:w-16 mr-6"
					/>
					<div>
						<h1 className="font-semibold text-md md:text-lg">
							Fully equipped
						</h1>
						<p className="text-gray-500 mt-1 md:font-semibold text-xs md:text-sm">
							We bring everything needed to get the job done well.
						</p>
					</div>
				</div>
			</div>
			<div className="md:w-2/4 lg:w-1/3 border">
				<div className="bg-[#f5f9ff] pt-7 md:pt-12 pb-6 md:pb-10 px-6 md:px-12 rounded-2xl">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png"
						alt="assurance badge"
						className="w-20 md:w-[110px] mb-5"
					/>
					<h1 className="font-bold text-2xl md:text-3xl">
						100% Quality Assured
					</h1>
					<p className="text-gray-500 text-sm my-2">
						If you don't love our service, we will make it right.
					</p>
				</div>
			</div>
		</div>
	);
}
