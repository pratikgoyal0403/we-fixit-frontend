import Container from "../Commons/Container.js";
import Loader from "../Commons/Loader.js";
import ServiceCards from "../Commons/Services_card.js";

export default function AllServices({ filteredResult }) {
	return (
		<div className="pb-10 pt-20 md:py-16 lg:py-20">
			<Container responsive="lg">
				<div className="w-screen pb-6 sm:pb-0 sm:w-full overflow-x-auto flex flex-nowrap sm:flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 sm:justify-center">
					{!filteredResult && <Loader />}
					{filteredResult &&
						filteredResult.map((category) => (
							<ServiceCards key={category._id} {...category} />
						))}
				</div>
			</Container>
		</div>
	);
}
