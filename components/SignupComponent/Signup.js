import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import LinkButton from "../Commons/Link_button";

export default function Signup({ hideModal, changeComponent }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const dispatch = useDispatch();
	const submitHandler = () => {
		// if (!email || !password) return alert("please enter all details");
		dispatch(signup({ email, password, phone }));
	};
	return (
		<div>
			<div className="flex items-center justify-between px-4 sm:px-10 py-5">
				<p className="text-xl sm:text-2xl font-semibold">Sign up</p>
				<div
					className="bg-gray-200 p-1 cursor-pointer rounded-full"
					onClick={hideModal}
				>
					<MdOutlineClose />
				</div>
			</div>
			<div className="px-4 sm:px-10 py-3 sm:py-2 sm:my-2 md:my-2">
				<Input
					className="text-xs sm:text-sm md:text-regular"
					placeholder="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					className="text-xs sm:text-sm md:text-regular"
					placeholder="phone"
					type="number"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<Input
					className="text-xs sm:text-sm md:text-regular"
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{/* <LinkButton title="forgot password" className="py-2 justify-center" /> */}
				<ElevatedButton title="Signup" click={submitHandler} />
			</div>
			<div className="px-4 sm:px-10 pt-2 pb-5 sm:py-5">
				<p className="text-center text-sm sm:text-base">
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
