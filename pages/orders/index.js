import DropDown from "../../components/Commons/DropDown";
import SectionHeading from "../../components/Commons/Section_heading";

export default function Orders() {
  return (
    <div className="pt-20">
      <SectionHeading title="My Bookings" />
      <div className="px-16 pb-5 mt-2 mx-auto max-h-[76vh] overflow-y-auto relative">
        <div className="grid font-bold bg-white text-lg grid-cols-5 text-center shadow-sm py-4 px-6 rounded-lg mt-5 sticky top-0">
          <p>Booking Id</p>
          <p>Address</p>
          <p>Price</p>
          <p>Status</p>
          <p>Time</p>
        </div>
        {[1, 2, 3, 4].map((e) => (
          <div
            className={
              "grid grid-cols-5 text-center shadow-sm p-4 rounded mt-5 " +
              (e !== 1 ? "line-through" : "")
            }
          >
            <p className="cursor-pointer">jkl2343j2k4lj23kl4j234j</p>
            <p>fictional steet, fictional city</p>
            <p>₹249</p>
            <p className="font-semibold text-yellow-500">
              <DropDown />
            </p>
            <p>2:30pm</p>
          </div>
        ))}
      </div>
    </div>
  );
}
