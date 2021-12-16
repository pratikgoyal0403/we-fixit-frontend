import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import LinkButton from "../Commons/Link_button";
import { useDispatch, useSelector } from "react-redux";
import { requestForOtp, login } from "../../store/actions/authActions";
import Loader from "../Commons/Loader";

export default function Login({ hideModal, changeComponent }) {
  const [enableOtp, setEnableOtp] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const hash = useSelector((state) => state.auth.hash);
  const dispatch = useDispatch();
  const requestOtp = () => {

    dispatch(requestForOtp({ phone }));
  };
  const verifyUser = () => {
    if (!hash || !otp || !phone) return alert("some data is not available");
    dispatch(login({ phone, otp, hash }));
  };
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          Icon2={
            <p
              className="text-primary font-semibold cursor-pointer"
              onClick={requestOtp}
            >
              send OTP
            </p>
          }
        />
        <Input
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          disabled={!hash}
        />
        <ElevatedButton title="Login" click={verifyUser} />
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
