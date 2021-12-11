import AdminLayout from "../../../components/Admin/Layout/Layout";
import DropDown from "../../../components/Commons/DropDown";


export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="px-10 py-6">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <div className="grid grid-cols-3 gap-10 mt-5">
          {/* STAT BOX */}
          <div className="rounded-lg bg-justPrimary text-center py-20">
            <h1>stat box 1</h1>
          </div>
          <div className="rounded-lg bg-justPrimary text-center py-20">
            <h1>stat box 1</h1>
          </div>
          <div className="rounded-lg bg-justPrimary text-center py-20">
            <h1>stat box 1</h1>
          </div>
        </div>
        <h1 className="font-bold text-2xl mt-10">Active Orders</h1>
        <div className="">
          {/* ORDER CARD */}
          <div className="grid font-bold bg-white text-lg grid-cols-5 text-center shadow-sm py-4 px-6 rounded-lg mt-5 sticky top-0">
            <p>Booking Id</p>
            <p>Address</p>
            <p>Price</p>
            <p>Status</p>
            <p>Time</p>
          </div>
          {[1, 2, 3, 4].map((e) => (
            <div className="shadow-sm">
              <div className="grid grid-cols-5 border-b text-center p-4 rounded mt-5 ">
                <p className="cursor-pointer">jkl2343j2k4lj23kl4j234j</p>
                <p>fictional steet, fictional city</p>
                <p>₹249</p>
                <p className="font-semibold">
                  <DropDown />
                </p>
                <p>2:30pm</p>
              </div>
              {e === 1 && (
                <div className="py-4">
                  <div className="w-1/2 flex items-center justify-between pl-20 py-2">
                    <p>Haircut + FREE 10 min Head Massage</p>
                    <p>₹249</p>
                  </div>
                  <div className="w-1/2 flex items-center justify-between pl-20 py-2">
                    <p>Haircut + FREE 10 min Head Massage</p>
                    <p>₹249</p>
                  </div>
                  <div className="w-1/2 flex items-center justify-between pl-20 py-2">
                    <p>Haircut + FREE 10 min Head Massage</p>
                    <p>₹249</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      navbar: false,
    },
  };
};
