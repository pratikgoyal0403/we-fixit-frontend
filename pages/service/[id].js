import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";
import CreateReview from "../../components/ReviewBox/Create";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import { fetchServiceDetails } from "../../store/actions/appActions";
import { saveToCart } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProductDetailsPage({ id }) {
  const service = useSelector((state) => state.app.serviceDetails);
  const dispatch = useDispatch();
  console.log(service);
  useEffect(() => {
    dispatch(fetchServiceDetails(id));
  }, []);
  const addToCart = () => {
    dispatch(saveToCart({ serviceId: id }));
  };
  return (
    <div className="py-24">
      {/* <SectionHeading title="XYZ Product"/> */}
      <div className="container flex justify-center">
        <div className="w-10/12 flex items-stretch justify-start">
          <div className="flex-1 rounded-xl overflow-hidden">
            <img src="/images/hero-2.webp" alt="service image" />
          </div>
          <div className="flex-1 px-6">
            <h1 className="text-4xl text-gray-700 font-semibold mb-4">
              {service?.title}
            </h1>
            <p className="mb-4 text-yellow-500">4.27 stars</p>

            <ul className="my-5 list-disc px-5">
              {service &&
                service.features.map((f, index) => (
                  <li key={f + index} className="text-gray-500">
                    {f}
                  </li>
                ))}
            </ul>
            <p className="font-semibold text-lg">₹{service?.price}</p>
            <div>
              <ElevatedButton
                title="add"
                className="w-32 mt-8"
                click={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-14">
        <SectionHeading title="Reviews" />
        <div className="grid grid-cols-10">
          <div className="col-span-5 flex items-center justify-center">
            <ReviewBox reviews={service?.reviews} />
          </div>
          <div className="col-span-5 flex items-center justify-center">
            <CreateReview serviceId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}
