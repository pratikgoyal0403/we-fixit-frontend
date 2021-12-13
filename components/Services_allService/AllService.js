import ServiceCards from "../Commons/Services_card.js";

export default function AllServices() {
	return (
		<div className="container mx-auto py-20">
			<div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-10">
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
