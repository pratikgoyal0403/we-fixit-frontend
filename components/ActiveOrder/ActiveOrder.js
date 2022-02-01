import { useState, useEffect, useRef } from "react";
import DropDown from "../Commons/DropDown";

export default function ({ order }) {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const containerRef = useRef(null);
//   const clickTracker = (event) => {
//     if (containerRef.current || !containerRef.current.contains(event.target)) {
//       return setShowFullDetails(false);
//     }
//   };
//   useEffect(() => {
//     document.addEventListener("click", clickTracker);
//     return () => document.removeEventListener("click", clickTracker);
//   }, []);
  const toggleDetail = () => {
    setShowFullDetails((prevValue) => !prevValue);
  };
  return (
    <div
      className="shadow-sm hover:cursor-pointer"
      key={order._id}
      ref={containerRef}
      onClick={toggleDetail}
    >
      <div className="grid grid-cols-5 border-b text-center p-4 rounded mt-5 ">
        <p className="cursor-pointer">{order._id}</p>
        <p>{order.address}</p>
        <p>₹{order.grandTotal}</p>
        <p className="font-semibold">
          <DropDown
            options={["Confirmed", "Completed"]}
            selectedValue={order.status}
            change={(value) => statusChangeHandler(order._id, value)}
          />
        </p>
        <p>2:30pm</p>
      </div>
      {showFullDetails && (
        <div className="py-4">
          {order.services.map((service) => (
            <div
              className="w-1/2 flex items-center justify-between pl-20 py-2"
              key={service._id}
            >
              <p>{service.title}</p>
              <p>₹ {service.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
