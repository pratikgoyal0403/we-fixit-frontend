import DropDown from "../../components/Commons/DropDown";
import SectionHeading from "../../components/Commons/Section_heading";
import { getMyOrders } from "../../store/actions/orderActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  console.log(orders);
  useEffect(() => {
    dispatch(getMyOrders());
  }, []);
  return (
    <div className="pt-24">
      <SectionHeading title="My Bookings" />
      <div className="px-10 pb-5 mt-2 mx-auto max-h-[76vh] overflow-y-auto relative">
        <div className="grid font-bold bg-white text-lg grid-cols-7 text-center shadow-sm py-4 px-6 rounded-lg mt-5 sticky top-0">
          <p>Booking Id</p>
          <p>Address</p>
          <p>Price</p>
          <p>Status</p>
          <p>TimeStamp</p>
          <p>Booking Date</p>
          <p>Created At</p>
        </div>
        {orders &&
          orders.map((o) => (
            <div
              className={
                "grid grid-cols-7 text-center shadow-sm p-4 rounded mt-5 "
              }
              key={o._id}
            >
              <p className="cursor-pointer">{o._id}</p>
              <p>{o.address}</p>
              <p>₹{o.grandTotal}</p>
              <p className="font-semibold text-yellow-500">{o.status}</p>
              <p>{o?.timestamp}</p>
              <p>{o?.bookingDate}</p>
              <p>2:30pm</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProtectedRoute(Orders);
