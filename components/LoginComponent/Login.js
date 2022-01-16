import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import LinkButton from "../Commons/Link_button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import Loader from "../Commons/Loader";

export default function Login({ hideModal, changeComponent }) {
  // const [password, setPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const verifyUser = () => {
    if (!email || !password) return alert("some data is not available");
    dispatch(login({ email, password }));
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
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ElevatedButton title="Login" click={verifyUser} />
      </div>
      <div className="px-10 py-5">
        <p className="text-center">
          dont{"'"}t have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={changeComponent.bind(this, "signup")}
          >
            signup
          </span>
        </p>
      </div>
    </div>
  );
}
