import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";
import CreateReview from "../../components/ReviewBox/Create";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import { fetchServiceDetails } from "../../store/actions/appActions";
import { saveToCart } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "../../components/Commons/Container";

export default function ProductDetailsPage({ id }) {
	const service = useSelector((state) => state.app.serviceDetails);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchServiceDetails(id));
	}, []);
	const addToCart = () => {
		dispatch(saveToCart({ serviceId: id }));
	};
	return (
		<div className="pt-24">
			{/* <SectionHeading title="XYZ Product"/> */}
			<Container>
				<div className="flex justify-center">
					<div className="2xl:w-10/12 lg:flex items-stretch justify-start">
						<div className="border flex-1 rounded-lg overflow-hidden">
							<img
								src="/images/hero-2.webp"
								className="object-cover h-full w-full"
								alt="service image"
							/>
						</div>
						<div className="flex-1 mt-4 md:mt-6 lg:mt-0 px-2 lg:px-6">
							<h1 className="text-2xl md:text-3xl xl:text-4xl text-gray-700 font-semibold mb-4">
								{service?.title}
							</h1>
							<p className="mb-4 text-yellow-500">4.27 stars</p>

							<ul className="my-5 list-disc px-5">
								{service &&
									service.features.map((f, index) => (
										<li
											key={f + index}
											className="text-gray-500 text-regular md:text-xl lg:text-regular"
										>
											{f}
										</li>
									))}
							</ul>
							<p className="font-semibold text-xl">₹{service?.price}</p>
							<div>
								<ElevatedButton
									title="Add"
									className="w-32 mt-6 md:mt-8"
									click={addToCart}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="my-14">
					<SectionHeading title="Reviews" />
					<div className="grid lg:grid-cols-10 mt-4 md:mt-8">
						<div className="col-span-5 flex items-center justify-center">
							<ReviewBox
								reviews={
									[
										{
											_id: 1,
											rating: 2,
											review:
												"feeling something something bolo honey bunny",
										},
										{
											_id: 2,
											rating: 3,
											review:
												"This is how you roll boisaab, This is the right way.",
										},
										{
											_id: 3,
											rating: 5,
											review:
												"Aajao on the beach yara photo meri kheech, futi kismat hogi teri agar tuney ye baat na mani",
										},
										{
											_id: 4,
											rating: 4,
											review: "Yolo",
										},
									] || service?.reviews
								}
							/>
						</div>
						<div className="col-span-5 flex justify-center mt-10 lg:mt-0">
							<CreateReview serviceId={id} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export function getServerSideProps(context) {
	return { props: { id: context.params.id } };
}
