import { useEffect } from "react";
import AdminLayout from "../../../components/Admin/Layout/Layout";
import DropDown from "../../../components/Commons/DropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchActiveOrders,
  changeOrderStatus,
} from "../../../store/actions/adminAction";
import AdminProtection from "../../../components/ProtectedRoute/AdminProtection";
import ActiveOrder from "../../../components/ActiveOrder/ActiveOrder";

function Dashboard() {
  const activeOrders = useSelector((state) => state.admin.activeOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActiveOrders());
  }, []);
  const statusChangeHandler = (oid, status) => {
    console.log(oid, status);
    dispatch(changeOrderStatus(oid, { status }));
  };
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
          {activeOrders &&
            activeOrders.map((order) => (
              <ActiveOrder key={order._id} order={order} />
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

export default AdminProtection(Dashboard);
