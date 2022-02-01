import ElevatedButton from "./Elevated_button";
import LinkButton from "./Link_button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { saveToCart } from "../../store/actions/cartActions";
import reviewParser from "../../utils/review-parser";
import { FaStar } from "react-icons/fa";

const star = { color: "#38CC77", fontSize: "14px", margin: "10px 3px" };

export default function ServiceInfoCard({
  _id: id,
  title,
  price,
  features,
  image,
  reviews,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const addToCart = (e) => {
    e.stopPropagation();
    dispatch(saveToCart({ serviceId: id }));
  };
  const redirectToServiceDetails = (e) => {
    router.replace("/service/" + id);
    e.stopPropagation();
  };
  console.log(reviews);
  return (
    <div
      className="rounded shadow-lg overflow-hidden flex flex-col"
      onClick={redirectToServiceDetails}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <img
            src={
              image ? "http://localhost:5001/" + image : "/images/hero-2.webp"
            }
            alt="service image"
          />
        </div>
        <div className="px-4 mt-4 lg:mt-0">
          <h1 className="text-gray-700 font-semibold">{title}</h1>
          <p className="text-green-600 text-sm font-semibold py-1 flex items-center justify-start">
            {reviewParser(reviews)}
            <FaStar style={star} />
          </p>
          <p className="font-semibold">₹{price}</p>
          {/* <p className="text-sm text-gray-500 font-semibold">40 min</p> */}
        </div>
      </div>
      <div className="px-8 py-2 hidden lg:block">
        <ul className="list-disc">
          {features.map((feature) => (
            <li
              className="text-gray-500 font-semibold text-sm mt-2"
              key={feature + feature.length}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between px-4 mt-auto">
        <ElevatedButton
          title="Add"
          className="px-6 py-1 md:py-2 md:px-10"
          click={addToCart}
        />
        <LinkButton title="view details >" />
      </div>
    </div>
  );
}
