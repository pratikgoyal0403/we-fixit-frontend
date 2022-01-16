import Cart_Card from "../../components/Card_cart/Card";
import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "../../store/actions/cartActions";
import { postMyOrder } from "../../store/actions/orderActions";
import Input from "../../components/Commons/Input";
import DropDown from "../../components/Commons/DropDown";
import { useRouter } from "next/router";

export default function Cart() {
  const [address, setAddress] = useState("");
  const [remarks, setRemarks] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const checkDisabled = () => {
    if (!address || !timestamp || !bookingDate) {
      return true;
    }
    return false;
  };

  const postOrder = () => {
    dispatch(
      postMyOrder({
        address,
        remarks,
        timestamp,
        services: cartDetails.services,
        bookingDate,
      })
    );
    router.push("/orders");
  };
  return (
    <div className="py-24">
      <SectionHeading title="Cart" />
      <div className="w-10/12 mx-auto grid grid-cols-10">
        <div className="col-span-6">
          {cartDetails &&
            cartDetails.services.map((s) => <Cart_Card key={s._id} {...s} />)}
        </div>
        <div className="col-span-4 pl-6 w-full">
          <div className="px-6 pt-2 pb-1 mt-10 rounded-lg shadow-lg">
            <h1 className="text-center text-xl font-semibold text-gray-700 pb-4">
              Order Summary
            </h1>
            {cartDetails &&
              cartDetails.services.map((s) => (
                <div
                  className="w-full my-2 flex items-center justify-between"
                  key={s._id}
                >
                  <p className="text-gray-600">{s.title}</p>
                  <p className="text-gray-600">₹{s.price}</p>
                </div>
              ))}
            <hr className="mt-4" />
            <div className="w-full my-3 flex items-center justify-between">
              <p className="text-gray-600">Total Items:</p>
              <p className="text-gray-600">{cartDetails?.services.length}</p>
            </div>
            <div className="w-full my-3 flex items-center justify-between">
              <p className="text-gray-500 font-bold text-lg">Grand Total:</p>
              <p className="text-gray-500 font-bold text-lg">
                ₹
                {cartDetails &&
                  cartDetails.services.reduce((a, currentVal) => {
                    return a + currentVal.price;
                  }, 0)}
              </p>
            </div>
            <hr className="mt-4" />
            <div className="my-2">
              <p>Timestamp</p>
              <DropDown
                options={["Morning", "Noon", "Evening"]}
                placeholder="Timestamp"
                selectedValue={timestamp}
                change={(value) => setTimestamp(value)}
              />
              <p className="mt-2">Date</p>
              <Input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              />
              <p className="mt-2">Address: </p>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <p>Remarks: </p>
              <Input
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </div>
            <ElevatedButton
              title="Checkout"
              className="shadow-none"
              click={checkDisabled() ? () => {} : postOrder}
              disabled={checkDisabled()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
