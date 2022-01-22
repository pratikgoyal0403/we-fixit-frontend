import AdminLayout from "../../../components/Admin/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllOrders } from "../../../store/actions/adminAction";
import { useRouter } from "next/router";
import AdminProtection from "../../../components/ProtectedRoute/AdminProtection";

function Orders() {
  const orders = useSelector((state) => state.admin.orders);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);
  return (
    <AdminLayout>
      <div className="px-10">
        <div className="grid font-bold bg-white text-lg grid-cols-5 text-center shadow-sm py-4 px-6 rounded-lg mt-5 sticky top-0">
          <p>Booking Id</p>
          <p>Address</p>
          <p>Price</p>
          <p>Time</p>
        </div>
        {orders &&
          orders.map((o) => (
            <div
              className={
                "grid grid-cols-5 text-center shadow-sm p-4 rounded mt-5 "
              }
              key={o._id}
              onClick={() => router.push("/admin/order/" + o._id)}
            >
              <p className="cursor-pointer">{o._id}</p>
              <p>{o.address}</p>
              <p>₹{o.grandTotal}</p>
              <p>2:30pm</p>
            </div>
          ))}
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

export default AdminProtection(Orders);
