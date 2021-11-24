import Heading from "../Commons/Section_heading";
import LinkButton from "../Commons/Link_button.js";
import { BsArrowRightShort } from "react-icons/bs";

export default function About() {
	return (
		<div className="my-20">
			<Heading title="About" />
			{/* <img */}
			{/* 	src="/images/aboutus.png" */}
			{/* 	alt="about us image" */}
			{/* 	className="w-1/4 mx-auto" */}
			{/* /> */}
			<div className="w-4/5 mx-auto my-8">
				<p className="text-center">
					Urban Company is Asia's largest online home services
					platform. Launched in 2014, Urban Company today operates in
					India, Australia, Singapore, the UAE and The Kingdom of
					Saudi Arabia. The platform helps customers book reliable &
					high quality services - beauty treatments, massages,
					haircuts, home cleaning, handymen, appliance repair,
					painting, pest control and more – delivered by trained
					professionals conveniently at home. Urban Company's vision
					is to empower millions of professionals worldwide to deliver
					services at home like never experienced before. The Company
					raised Series F funding of USD 255 million in April 2021.
					The Series F round was led by new investors - Prosus
					Ventures, Dragoneer and Wellington Management with
					participation from existing investors - Vy Capital, Tiger
					Global and Steadview. The latest round includes a primary
					capital infusion of USD 188 million and a secondary sale of
					approximately USD 67 million by select angels and early
					investors
				</p>
				<LinkButton
					title="learn more"
					className="w-max mx-auto my-5 "
					Icon2={<BsArrowRightShort />}
				/>
			</div>
		</div>
	);
}
