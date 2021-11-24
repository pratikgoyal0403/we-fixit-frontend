export default function Features() {
	return (
		<div className="container flex items-center justify-center py-12 font-sans">
			<div className="mr-10">
				<h1 className="text-4xl font-bold font-sans mb-5">
					Why We Fixit?
				</h1>
				<div className="flex items-center py-5">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"
						alt="features icons"
						className="w-[80px] mr-6"
					/>
					<div>
						<h1 className="font-semibold text-lg">
							Transparent Pricing
						</h1>
						<p className="text-gray-500 font-semibold text-sm">
							See fixed prices before you book. No hidden charges.
						</p>
					</div>
				</div>
				<div className="flex items-center py-5">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png"
						alt="features icons"
						className="w-[80px] mr-6"
					/>
					<div>
						<h1 className="font-semibold text-lg">Experts only</h1>
						<p className="text-gray-500 font-semibold text-sm">
							Our professionals are well trained and have on-job
							expertise.
						</p>
					</div>
				</div>
				<div className="flex items-center py-5">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png"
						alt="features icons"
						className="w-[80px] mr-6"
					/>
					<div>
						<h1 className="font-semibold text-lg">
							Fully equipped
						</h1>
						<p className="text-gray-500 font-semibold text-sm">
							We bring everything needed to get the job done well.
						</p>
					</div>
				</div>
			</div>
			<div className="w-1/3">
				<div className="bg-[#f5f9ff] pt-12 pb-10 px-12 rounded-2xl">
					<img
						src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png"
						alt="assurance badge"
						className="w-[110px] mb-5"
					/>
					<h1 className="font-bold text-3xl">100% Quality Assured</h1>
					<p className="text-gray-500 text-sm my-2">
						If you don't love our service, we will make it right.
					</p>
				</div>
			</div>
		</div>
	);
}
