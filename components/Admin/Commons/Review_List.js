import { FiTrash2 } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import ElevatedButton from "../../Commons/Elevated_button";
import { FaStar } from "react-icons/fa";

const star = { color: "#38CC77", fontSize: "14px", marginRight: "5px" };

export default function Review_List({
  _id: id,
  review,
  username,
  email,
  rating,
  onEdit,
  onDelete,
}) {
  return (
    <div className="rounded-lg px-5 py-4 border-2 hover:border-gray-400">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-900 text-lg">{username}</p>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
        <div className="flex items-stretch justify-end">
          <ElevatedButton
            title={<MdModeEdit />}
            className=" px-3 !bg-white !my-0 text-green-500 !shadow-none hover:border-gray-300 rounded-md border-white border"
            click={onEdit.bind(this, id)}
          />
          <ElevatedButton
            title={<FiTrash2 className="text-lg" />}
            className=" px-3 !bg-white !my-0 text-danger !shadow-none hover:border-gray-300 rounded-md border-white border"
            click={onDelete.bind(this, id)}
          />
        </div>
      </div>
      <div className="flex items-center pt-1">
          <FaStar style={star} />
          {rating ? rating : "0"}
        </div>
      <p className="mt-2 text-lg">{review}</p>
    </div>
  );
}
