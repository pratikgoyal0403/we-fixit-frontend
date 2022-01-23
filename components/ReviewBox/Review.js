export default function Review({ rating, review }) {
	return (
		<div className="border-b-2 px-2 md:px-4 py-4">
			<p className="text-yellow-500 mb-1">{rating} star</p>
			<div className="flex align-items justify-between">
				<p className="text-gray-600 md:text-lg mr-2">{review}</p>
				<p className="text-gray-400 whitespace-nowrap">4 days ago</p>
			</div>
		</div>
	);
}
