import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";
import CreateReview from "../../components/ReviewBox/Create";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import { fetchServiceDetails } from "../../store/actions/appActions";
import { saveToCart } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "../../components/Commons/Container";
import reviewParser from "../../utils/review-parser";

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
    <div className="pt-24 md:pb-16">
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
              <p className="mb-4 text-yellow-500">
                {service?.reviews
                  ? reviewParser(service?.reviews) + " Star"
                  : ""}
              </p>

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
              <ReviewBox reviews={service?.reviews} />
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
