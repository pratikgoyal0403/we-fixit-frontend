import { useState, useEffect } from "react";
import AdminLayout from "../../../components/Admin/Layout/Layout";
import { MdOutlineAdd, MdModeEdit } from "react-icons/md";
import Backdrop from "../../../components/Commons/Backdrop";
import Modal from "../../../components/Commons/Modal";
import ConfirmBox from "../../../components/Admin/Commons/Confirm_box";
import CategoryForm from "../../../components/Admin/Commons/Category_Form";
import Review_Form from "../../../components/Admin/Commons/Review_Form";
import SectionHeading from "../../../components/Commons/Section_heading";
import Review_List from "../../../components/Admin/Commons/Review_List";
import { useSelector, useDispatch } from "react-redux";
import {
  AdminReview,
  fetchAdminReviews,
  EditReview,
  DeleteReview,
} from "../../../store/actions/adminAction";

export default function AdminReviews() {
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const reviews = useSelector((state) => state.admin.reviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminReviews());
  }, []);
  const concealModal = () => setShowModal((prevModal) => true);
  const hideModal = () => {
    setShowModal((prevModal) => false);
    setDeleteId(null);
    setEditId(null);
  };
  const onEdit = (id) => {
    setEditId(id);
    setDeleteId(null);
    setShowModal(true);
  };
  const onDelete = (id) => {
    setDeleteId(id);
    setEditId(null);
    setShowModal(true);
  };
  const yesHandler = () => {
    dispatch(DeleteReview(deleteId));
    hideModal();
  };
  const submitHandler = (values) => {
    if (editId) {
      dispatch(EditReview(editId, values));
      hideModal();
      return;
    }
    dispatch(AdminReview(values));
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
              <Review_Form editId={editId} submitHandler={submitHandler} />
            )}
          </Modal>
        </Backdrop>
      )}
      <AdminLayout>
        <div className="px-5 py-2 border-b-2 ">
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
          <SectionHeading title="Reviews" />
          <div className="px-2 py-10 grid grid-cols-2 gap-8">
            {!!reviews.length &&
              reviews.map((review) => (
                <Review_List
                  key={review._id}
                  {...review}
                  onEdit={onEdit}
                  onDelete={onDelete}
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
