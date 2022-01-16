import Review from "./Review";

export default function ReviewBox({ reviews }) {
  return (
    <div className="w-3/4 my-5">
      {reviews &&
        reviews.map((review) => <Review key={review._id} {...review} />)}
    </div>
  );
}
