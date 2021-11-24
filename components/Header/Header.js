export default function Header() {
	return (
		<div className="container grid grid-cols-2 font-sans">
			<div className="flex items-start flex-col justify-center pl-16">
				<h1 className="text-xl mb-5 text-gray-500 tracking-widest uppercase">
					We Fixit
				</h1>
				<h3 className="text-4xl mb-4 font-bold font-sans">
					Quality home services, on demand
				</h3>
				<p className="text-gray-600 text-lg">
					Experienced, hand-picked Professionals to serve you at your
					doorstep
				</p>
			</div>
			<img src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg" />
		</div>
	);
}
