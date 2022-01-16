import Heading from "../Commons/Section_heading";
import Input from "../Commons/Input.js";
import ElevatedButton from "../Commons/Elevated_button.js";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { contactUs } from "../../store/actions/appActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../Commons/Container";

export default function ContactUs() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	const dispatch = useDispatch();

	const submitHandler = () => {
		dispatch(contactUs());
	};
	return (
			<Container className="xl:w-5/6">
				<Heading title="Contact Us" />
				<div className="my-10 rounded mx-auto grid md:grid-cols-2">
					<div className="pr-16 mb-6 md:mb-0">
						<h1 className="text-3xl font-semibold text-gray-600">
							Get a quote{" "}
						</h1>
						<p className="text-gray-500 my-2 mb-10">
							Fill up the form and our Team will get back to you within
							24 hours
						</p>
						<div className="flex items-center mb-5">
							<div className="w-4">
								<MdEmail className="text-2xl text-primary" />
							</div>
							<p className="ml-4 text-lg">wefixit@gmail.com</p>
						</div>
						<div className="flex items-center mb-5">
							<div className="w-4">
								<MdLocationOn className="text-2xl text-primary" />
							</div>
							<p className="ml-4 text-lg">
								12 street, fictional town, 201919, some state, India
							</p>
						</div>
					</div>
					<div className="w-full lg:w-2/3">
						<div className="">
							<Input
								type="text"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<Input
								type="text"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<textarea
								placeholder="Message"
								rows="5"
								className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<ElevatedButton
							title="Submit"
							Icon2={<RiSendPlaneFill className="ml-2 text-lg" />}
							click={submitHandler}
						/>
					</div>
				</div>
			</Container>
	);
}
