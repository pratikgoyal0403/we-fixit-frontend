export default function Review({rating, review}) {
  return (
    <div className="border-b-2 px-4 my-2">
      <p className="text-yellow-500">{rating} star</p>
      <div className="flex align-items justify-between">
        <p className="text-gray-600 text-lg">
          {review}
        </p>
        <p className="text-gray-400">4 days ago</p>
      </div>
    </div>
  );
}
