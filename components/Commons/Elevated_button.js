export default function ElevatedButton({ Icon1, Icon2, title, className }) {
	return (
		<div
			className={
				"bg-primary flex items-center justify-center my-5 text-center text-white py-2 rounded shadow-xl cursor-pointer " +
				className
			}
		>
			{!!Icon1 && Icon1}
			<p className="font-semibold">{title}</p>
			{!!Icon2 && Icon2}
		</div>
	);
}
