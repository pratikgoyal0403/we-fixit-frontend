import ElevatedButton from "../../Commons/Elevated_button";
import { FiTrash2 } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";

export default function ServiceCard({ onEdit, title, _id: id, onDelete }) {
  return (
    <div className="flex items-center justify-between my-3 shadow-md rounded px-5 ">
      <p>{title}</p>
      <div className="flex items-center justify-center">
        <ElevatedButton
          title={<MdModeEdit />}
          className=" mr-4 px-3 !bg-blue-500"
          click={onEdit.bind(this, id)}
        />
        <ElevatedButton
          title={<FiTrash2 className="text-lg" />}
          className="px-3 !bg-danger"
          click={onDelete.bind(this, id)}
        />
      </div>
    </div>
  );
}
