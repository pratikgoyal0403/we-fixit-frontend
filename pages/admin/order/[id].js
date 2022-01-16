import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrderDetail } from "../../../store/actions/adminAction";

export default function Order({ id }) {
  const orderDetail = useSelector((state) => state.admin.orderDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderDetail(id));
  }, []);

  return (
    <div className="mt-24">
      <h1 className="font-bold text-2xl text-center">Order Details</h1>
      <div className="w-2/3 mx-auto">
        <div className="flex items-center justify-between mt-4">
          <p className="p-2 bg-gray-100 rounded-xl">{orderDetail?._id}</p>
          <p className="p-2 bg-gray-100 rounded-xl">{orderDetail?.status}</p>
        </div>
        <div className="w-1/2 mx-auto">
          <div className="flex justify-between items-start mt-4 bg-gray-100 px-5 py-1 rounded">
            <p>BookingDate:- </p>
            <p>{orderDetail?.bookingDate}</p>
          </div>
          <div className="flex justify-between items-start mt-4 bg-gray-100 px-5 py-1 rounded">
            <p>address:- </p>
            <p>{orderDetail?.address}</p>
          </div>
          <div className="flex justify-between items-start mt-4 bg-gray-100 px-5 py-1 rounded">
            <p>timestamp:- </p>
            <p>{orderDetail?.timestamp}</p>
          </div>
          <div className="flex justify-between items-start mt-4 bg-gray-100 px-5 py-1 rounded">
            <p>Grand Total:- </p>
            <p>₹{orderDetail?.grandTotal}</p>
          </div>
        </div>
        <h1 className="font-bold text-2xl text-center mt-5">Services</h1>
        {orderDetail &&
          orderDetail?.services?.map((service) => (
            <div key={service._id} className="flex justify-between items-start mt-4 bg-gray-100 px-5 py-1 rounded">
              <p>{service.title}</p>
              <p>₹{service.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}
