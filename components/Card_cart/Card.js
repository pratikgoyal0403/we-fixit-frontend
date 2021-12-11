import ElevatedButton from "../Commons/Elevated_button";
import LinkButton from "../Commons/Link_button";
import {FiTrash2} from 'react-icons/fi'

export default function Cart_Card() {
  return (
    <div className="w-auto rounded shadow-lg overflow-hidden mt-10">
      <div className="grid grid-cols-10">
        <div className="col-span-4">
          <img src="/images/hero-2.webp" alt="service image" className="h-full"/>
        </div>
        <div className="col-span-6 px-4">
          <h1 className="text-gray-700 font-semibold mb-2">
            Haircut + FREE 10 min Head Massage
          </h1>
          <p className="text-green-600 text-sm font-semibold py-1 mb-2">4.67 star</p>
          <p className="font-semibold">₹249</p>
          <ElevatedButton title={<FiTrash2 className="text-lg"/>} className="px-3 w-10 bg-red-500" />
        </div>
      </div>
      {/* <div className="px-8 py-2">
        <ul className="list-disc">
          <li className="text-gray-500 font-semibold text-sm mt-2">
            HAIR CUT - Men's Haircut
          </li>
          <li className="text-gray-500 font-semibold text-sm mt-2">
            HEAD MASSAGE - 10 min Head Massage
          </li>
        </ul>
      </div> */}
      <div className="flex items-center justify-between px-4">
        
      </div>
    </div>
  );
}