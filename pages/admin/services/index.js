import { useEffect, useState } from "react";
import { MdOutlineAdd, MdModeEdit } from "react-icons/md";
import AdminLayout from "../../../components/Admin/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewService,
  fetchAllCategories,
  fetchAllServices,
  updateService,
  deleteService,
} from "../../../store/actions/adminAction";
import ElevatedButton from "../../../components/Commons/Elevated_button";
import ServiceCard from "../../../components/Admin/Commons/Service_Card";
import SectionHeading from "../../../components/Commons/Section_heading";
import Backdrop from "../../../components/Commons/Backdrop";
import Modal from "../../../components/Commons/Modal";
import ServiceForm from "../../../components/Admin/Commons/Service_Form";
import ConfirmBox from "../../../components/Admin/Commons/Confirm_box";

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const allServices = useSelector((state) => state.admin.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllServices());
    dispatch(fetchAllCategories());
  }, []);
  const concealModal = () => setShowModal(true);
  const hideModal = () => {
    setShowModal(false);
    setEditId(null);
  };
  const editHandler = (id) => {
    setEditId(id);
    concealModal();
  };
  const deleteHandler = (id) => {
    setDeleteId(id);
    concealModal();
  };
  const submitHandler = (value) => {
    const formData = new FormData();
    for (let key in value) {
      console.log(key, value[key]);
      formData.append(key, value[key]);
    }
    if (editId) {
      dispatch(updateService(editId, formData));
      return;
    }
    dispatch(addNewService(formData));
    hideModal();
  };
  const yesHandler = () => {
    dispatch(deleteService(deleteId));
    hideModal();
  };
  return (
    <>
      {showModal && (
        <Backdrop hideModal={hideModal}>
          <Modal>
            {deleteId ? (
              <ConfirmBox hideModal={hideModal} onYes={yesHandler} />
            ) : (
              <ServiceForm editId={editId} onSubmit={submitHandler} />
            )}
          </Modal>
        </Backdrop>
      )}
      <AdminLayout>
        <div className="px-5 py-2 border-b-2  ">
          <div className="flex items-center justify-between">
            <p
              className="p-3 hover:bg-primary rounded hover:text-white"
              onClick={concealModal}
            >
              <MdOutlineAdd />
            </p>
          </div>
        </div>
        <div className="p-2">
          <SectionHeading title="Services" />
          <div className="px-2 py-2">
            {allServices &&
              allServices.map((service) => (
                <ServiceCard
                  key={service._id}
                  onEdit={editHandler}
                  onDelete={deleteHandler}
                  {...service}
                />
              ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      navbar: false,
    },
  };
};
