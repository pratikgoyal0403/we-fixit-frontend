import Heading from "../Commons/Section_heading";
import Input from "../Commons/Input.js";
import ElevatedButton from "../Commons/Elevated_button.js";

export default function ContactUs() {
	return (
		<div className="my-20">
			<Heading title="Contact Us" />
			<div className="w-3/4 my-10 rounded mx-auto  grid grid-cols-2">
				<div>
					<p>Email:- wefixit@gmail.com</p>
					<p>
						address:- 12 street, fictional town, 201919, some state,
						India
					</p>
				</div>
				<div className="w-2/3">
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
					<ElevatedButton title="Submit" />
				</div>
			</div>
		</div>
	);
}
