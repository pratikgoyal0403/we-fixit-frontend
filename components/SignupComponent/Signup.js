import { MdOutlineClose } from "react-icons/md";
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import LinkButton from "../Commons/Link_button";

export default function Signup({ hideModal, changeComponent }) {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-5">
        <p className="text-2xl font-semibold">Sign up</p>
        <div
          className="bg-gray-200 p-1 cursor-pointer rounded-full"
          onClick={hideModal}
        >
          <MdOutlineClose />
        </div>
      </div>
      <div className="px-10 my-5">
        <Input placeholder="phone" type="number"/>
        <Input placeholder="password" />
        <LinkButton title="forgot password" className="py-2 justify-center" />
        <ElevatedButton title="Signup" />
      </div>
      <div className="px-10 py-5">
        <p className="text-center">
          already have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={changeComponent.bind(this, "login")}
          >
            login
          </span>
        </p>
      </div>
    </div>
  );
}
