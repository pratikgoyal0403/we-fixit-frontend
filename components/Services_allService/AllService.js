import ServiceCards from "../Commons/Services_card.js";

export default function AllServices() {
	return (
		<div className="py-20">
			<div className="w-11/12 mx-auto grid grid-cols-6 gap-10">
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
			</div>
		</div>
	);
}
