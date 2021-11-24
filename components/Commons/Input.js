export default function Input(props) {
	return (
		<input
			{...props}
			className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
		/>
	);
}
