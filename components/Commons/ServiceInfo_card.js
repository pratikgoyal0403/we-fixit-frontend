import ElevatedButton from "./Elevated_button";
import LinkButton from "./Link_button";

export default function ServiceInfoCard() {
  return (
    <div className="rounded shadow-lg overflow-hidden">
      <div className="flex items-stretch justify-center flex-col lg:flex-row">
        <div className="flex-1">
          <img src="/images/hero-2.webp" alt="service image"/>
        </div>
        <div className="flex-2 px-4">
          <h1 className="text-gray-700 font-semibold">
            Haircut + FREE 10 min Head Massage
          </h1>
          <p className="text-green-600 text-sm font-semibold py-1">4.67 star</p>
          <p className="font-semibold">₹249</p>
          {/* <p className="text-sm text-gray-500 font-semibold">40 min</p> */}
        </div>
      </div>
      <div className="px-8 py-2">
        <ul className="list-disc">
          <li className="text-gray-500 font-semibold text-sm mt-2">
            HAIR CUT - Men's Haircut
          </li>
          <li className="text-gray-500 font-semibold text-sm mt-2">
            HEAD MASSAGE - 10 min Head Massage
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between px-4">
        <ElevatedButton title="Add" className="px-10" />
        <LinkButton title="view details >" />
      </div>
    </div>
  );
}
