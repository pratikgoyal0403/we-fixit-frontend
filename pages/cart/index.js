import Cart_Card from "../../components/Card_cart/Card";
import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";

export default function Cart() {
  return (
    <div className="py-14">
      <SectionHeading title="Cart" />
      <div className="w-10/12 mx-auto grid grid-cols-10">
        <div className="col-span-6">
          <Cart_Card />
          <Cart_Card />
          <Cart_Card />
          <Cart_Card />
        </div>
        <div className="col-span-4 pl-6 w-full">
          <div className="px-6 pt-2 pb-1 mt-10 rounded-lg shadow-lg">
            <h1 className="text-center text-xl font-semibold text-gray-700 pb-4">Order Summary</h1>
            <div className="w-full my-2 flex items-center justify-between">
              <p className="text-gray-600">Haircut + FREE 10 min Head Massage</p>
              <p className="text-gray-600">₹249</p>
            </div>
            <div className="w-full my-2 flex items-center justify-between">
              <p className="text-gray-600">Haircut + FREE 10 min Head Massage</p>
              <p className="text-gray-600">₹249</p>
            </div>
            <hr className="mt-4"/>
            <div className="w-full my-3 flex items-center justify-between">
              <p className="text-gray-600">Total Items:</p>
              <p className="text-gray-600">4</p>
            </div>
            <div className="w-full my-3 flex items-center justify-between">
              <p className="text-gray-500 font-bold text-lg">Grand Total:</p>
              <p className="text-gray-500 font-bold text-lg">₹1000</p>
            </div>
            <ElevatedButton title="Checkout" className="shadow-none"/>
          </div>
        </div>
      </div>
    </div>
  );
}
