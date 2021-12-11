import { useState } from "react";
import Backdrop from "../Commons/Backdrop";
import Modal from "../Commons/Modal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../LoginComponent/Login";
import Navbar from "../Navbar/Navbar";
import Signup from "../SignupComponent/Signup";

export default function Layout({ navbar = true, children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalComponent, setModalComponent] = useState("login");
  const displayModal = (component) => {
    setShowModal(true);
    setModalComponent(component);
  };
  const hideModal = () => setShowModal(false);
  const changeModalComponent = (component) => {
    setModalComponent(component);
  };
  return (
    <div className="min-h-screen grid grid-rows-layout">
      {showModal && (
        <Backdrop hideModal={hideModal}>
          <Modal>
            {modalComponent === "login" && (
              <Login
                hideModal={hideModal}
                changeComponent={changeModalComponent}
              />
            )}
            {/* {modalComponent === "signup" && (
              <Signup
                hideModal={hideModal}
                changeComponent={changeModalComponent}
              />
            )} */}
          </Modal>
        </Backdrop>
      )}
      {navbar && <Navbar showModal={displayModal} />}
      {children}
      {navbar && <Footer />}
    </div>
  );
}
