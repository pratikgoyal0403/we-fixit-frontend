import { useState } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Header from "../components/Header/Header.js";
import Features from "../components/Features/Features.js";
import About from "../components/About/About.js";
import ContactUs from "../components/ContactUs/ContactUs.js";
import Footer from "../components/Footer/Footer.js";
import ServiceHeader from "../components/Services_header/Services_header.js";
import ServicesInput from "../components/Services_input/Services_input.js";
import AllServices from "../components/Services_allService/AllService.js";
import Backdrop from "../components/Commons/Backdrop.js";
import Modal from "../components/Commons/Modal.js";
import Login from "../components/LoginComponent/Login";
import Signup from "../components/SignupComponent/Signup.js";

export default function Home() {
	// const [showModal, setShowModal] = useState(false);
	// const [modalComponent, setModalComponent] = useState("login");
	// const displayModal = (component) => {
	//   setShowModal(true);
	//   setModalComponent(component);
	// };
	// const hideModal = () => setShowModal(false);
	return (
		<>
			{/* {showModal && (
        <Backdrop hideModal={hideModal}>
          <Modal>
            {modalComponent === "login" && <Login hideModal={hideModal}/>}
            {modalComponent === "signup" && <Signup />}
          </Modal>
        </Backdrop>
      )} */}
			<Header />
			<ServicesInput />
			<AllServices />
			<Features />
			{/*<About />
      <ContactUs /> */}
		</>
	);
}
