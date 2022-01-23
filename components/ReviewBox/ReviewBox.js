import Review from "./Review";

export default function ReviewBox({ reviews }) {
	return (
		<div className="2xl:w-3/4">
			{reviews &&
				reviews.map((review) => <Review key={review._id} {...review} />)}
		</div>
	);
}
