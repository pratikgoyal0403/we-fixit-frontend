import ServicesCard from "../Commons/Services_card.js";
import SectionHeading from "../Commons/Section_heading.js";

export default function Services() {
	return (
		<div className="2xl:container mx-auto p-5 my-5">
			<SectionHeading title="Services" />
			<div className="w-4/5 mx-auto grid grid-cols-6 gap-10 mt-10">
				<ServicesCard />
				<ServicesCard />
				<ServicesCard />
				<ServicesCard />
				<ServicesCard />
				<ServicesCard showMore />
			</div>
		</div>
	);
}
