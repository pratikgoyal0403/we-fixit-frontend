export default function Modal({ children }) {
	return (
		<div
			className="bg-white w-5/6 sm:w-96 max-w-7xl mx-auto rounded-lg"
			onClick={(e) => e.stopPropagation()}
		>
			{children}
		</div>
	);
}
