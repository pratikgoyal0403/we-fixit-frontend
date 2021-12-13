import Heading from "../Commons/Section_heading";
import Input from "../Commons/Input.js";
import ElevatedButton from "../Commons/Elevated_button.js";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactUs() {
	return (
		<div className="container mx-auto px-6 w-11/12 max-w-5xl mt-2 mb-10">
			<Heading title="Contact Us" />
			<div className="my-10 rounded mx-auto grid md:grid-cols-2">
				<div className="md:pr-16 order-2 md:order-1 mt-10 md:mt-0">
					<h1 className="text-3xl font-semibold text-gray-600 text-center md:text-left">
						Get a quote{" "}
					</h1>
					<p className="text-gray-500 my-2 mb-10 text-center md:text-left">
						Fill up the form and our Team will get back to you within 24
						hours
					</p>
					<div className="flex items-start mb-5">
						<MdEmail className="text-3xl text-primary" />
						<p className="ml-4 text-lg">wefixit@gmail.com</p>
					</div>
					<div className="flex items-start mb-5">
						<MdLocationOn className="text-3xl text-primary" />
						<p className="ml-4 text-lg">
							12 street, fictional town, 201919, some state, India
						</p>
					</div>
				</div>
				<div className="lg:w-2/3 mx-auto order-1 md:order-2">
					<div className="">
						<Input type="text" placeholder="Name" />
					</div>
					<div>
						<Input type="text" placeholder="Email" />
					</div>
					<div>
						<textarea
							placeholder="Message"
							rows="5"
							className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
						></textarea>
					</div>
					<ElevatedButton
						title="Submit"
						Icon2={<RiSendPlaneFill className="ml-2 text-lg" />}
					/>
				</div>
			</div>
		</div>
	);
}
