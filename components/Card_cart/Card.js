import ElevatedButton from "../Commons/Elevated_button";
import LinkButton from "../Commons/Link_button";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/actions/cartActions";
import reviewParser from "../../utils/review-parser";
import { FaStar } from "react-icons/fa";

const star = { color: "#38CC77", fontSize: "14px", margin: "10px 5px" };

export default function Cart_Card({ _id: id, title, price, reviews }) {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteFromCart({ serviceId: id }));
  };
  return (
    <div className="w-auto rounded shadow-md overflow-hidden border mb-6">
      <div className="grid grid-cols-10">
        <div className="col-span-10 sm:col-span-4">
          <img
            src="/images/hero-2.webp"
            alt="service image"
            className="h-full"
          />
        </div>
        <div className="col-span-10 sm:col-span-6 px-4">
          <h1 className="text-gray-700 font-semibold mb-2 mt-2">{title}</h1>
          <p className="text-green-600 text-sm font-semibold py-1 mb-2 flex items-center flex-start">
            {reviewParser(reviews)} <FaStar style={star} />
          </p>
          <p className="font-semibold">₹{price}</p>
          <ElevatedButton
            title={<FiTrash2 className="text-lg" />}
            className=" px-3 w-10 !bg-danger"
            click={deleteItem}
          />
        </div>
      </div>
      {/* <div className="px-8 py-2">
        <ul className="list-disc">
          <li className="text-gray-500 font-semibold text-sm mt-2">
            HAIR CUT - Men's Haircut
          </li>
          <li className="text-gray-500 font-semibold text-sm mt-2">
            HEAD MASSAGE - 10 min Head Massage
          </li>
        </ul>
      </div> */}
      <div className="flex items-center justify-between px-4"></div>
    </div>
  );
}
