import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/actions/appActions";

const starStyle = { color: "gold", fontSize: "28px", margin: "10px 3px" };

export default function CreateReview({ serviceId }) {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
	const dispatch = useDispatch();
	const submitHandler = () => {
		dispatch(postReview(serviceId, { rating, review }));
	};
	return (
		<div className="w-full md:w-3/4">
			<div className="flex items-center justify-start">
				{[1, 2, 3, 4, 5].map((r) =>
					rating < r ? (
						<FiStar key={r} style={starStyle} onClick={() => setRating(r)} />
					) : (
						<FaStar key={r} style={starStyle} onClick={() => setRating(r)} />
					)
				)}
			</div>
			<div>
				<textarea
					placeholder="Review"
					rows="5"
					className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
					value={review}
					onChange={(e) => setReview(e.target.value)}
				/>
				<ElevatedButton title="submit" click={submitHandler} />
			</div>
		</div>
	);
}
