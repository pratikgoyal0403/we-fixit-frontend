import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../../../components/Admin/Commons/Service_Card";
import AdminLayout from "../../../components/Admin/Layout/Layout";
import SectionHeading from "../../../components/Commons/Section_heading";
import { MdOutlineAdd, MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  fetchAllCategories,
  addNewCategory,
  updateCategory,
  deleteCategory,
} from "../../../store/actions/adminAction";
import Backdrop from "../../../components/Commons/Backdrop";
import Modal from "../../../components/Commons/Modal";
import ServiceForm from "../../../components/Admin/Commons/Service_Form";
import CategoryForm from "../../../components/Admin/Commons/Category_Form";
import ConfirmBox from "../../../components/Admin/Commons/Confirm_box";

export default function AdminCategories() {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const allCategories = useSelector((state) => state.admin.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  const concealModal = () => setShowModal(true);
  const hideModal = () => {
    setShowModal(false);
    setEditId(null);
    setDeleteId(null);
  };
  const editHandler = (id) => {
    setEditId(id);
    concealModal();
  };
  const deleteHandler = (id) => {
    setDeleteId(id);
    concealModal();
  };
  const submitHandler = (values) => {
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    if (editId) {
      dispatch(updateCategory(editId, formData));
      hideModal();
      return;
    }
    dispatch(addNewCategory(formData));
    hideModal();
  };
  const yesHandler = () => {
    dispatch(deleteCategory(deleteId));
    hideModal();
  };
  return (
    <>
      {showModal && (
        <Backdrop hideModal={hideModal}>
          <Modal>
            {deleteId ? (
              <ConfirmBox
                deleteId={deleteId}
                hideModal={hideModal}
                onYes={yesHandler}
              />
            ) : (
              <CategoryForm editId={editId} onSubmit={submitHandler} />
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
          <SectionHeading title="Categories" />
          <div className="px-2 py-2">
            {allCategories &&
              allCategories.map((service) => (
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
