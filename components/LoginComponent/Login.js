import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import LinkButton from "../Commons/Link_button";

export default function Login({ hideModal, changeComponent }) {
  const [enableOtp, setEnableOtp] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-5">
        <p className="text-2xl font-semibold">Log in</p>
        <div
          className="bg-gray-200 p-1 cursor-pointer rounded-full"
          onClick={hideModal}
        >
          <MdOutlineClose />
        </div>
      </div>
      <div className="px-10 py-4 my-5">
        <Input
          placeholder="phone number"
          type="number"
          Icon2={
            <p className="text-primary font-semibold cursor-pointer">
              send OTP
            </p>
          }
        />
        <Input placeholder="OTP" disabled={!enableOtp} />
        <ElevatedButton title="Login" />
      </div>
      {/* <div className="px-10 py-5">
        <p className="text-center">
          dont't have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={changeComponent.bind(this, "signup")}
          >
            signup
          </span>
        </p>
      </div> */}
    </div>
  );
}
