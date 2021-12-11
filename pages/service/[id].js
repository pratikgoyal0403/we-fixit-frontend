import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";
import CreateReview from "../../components/ReviewBox/Create";
import ReviewBox from "../../components/ReviewBox/ReviewBox";

export default function ProductDetailsPage() {
  return (
    <div className="py-16">
      {/* <SectionHeading title="XYZ Product"/> */}
      <div className="container flex justify-center">
        <div className="w-10/12 flex items-stretch justify-start">
          <div className="flex-1 rounded-xl overflow-hidden">
            <img src="/images/hero-2.webp" alt="service image" />
          </div>
          <div className="flex-1 px-6">
            <h1 className="text-4xl text-gray-700 font-semibold mb-4">
              product heading
            </h1>
            <p className="mb-4 text-yellow-500">4.27 stars</p>

            <ul className="my-5 list-disc px-5">
              <li className="text-gray-500">HAIR CUT - Men's Haircut</li>
              <li className="text-gray-500">
                HEAD MASSAGE - 10 min Head Massage
              </li>
              <li className="text-gray-500">HAIR CUT - Men's Haircut</li>
            </ul>
            <p className="font-semibold text-lg">₹239</p>
            <div>
              <ElevatedButton title="add" className="w-32 mt-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-14">
        <SectionHeading title="Reviews" />
        <div className="grid grid-cols-10">
          <div className="col-span-6">
            <ReviewBox />
          </div>
          <div className="flex-1">
            <CreateReview className="col-span-4"/>
          </div>
        </div>
      </div>
    </div>
  );
}
