import { useState } from "react";
import Backdrop from "../Commons/Backdrop";
import Modal from "../Commons/Modal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../LoginComponent/Login";
import Navbar from "../Navbar/Navbar";
import Signup from "../SignupComponent/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BottomNavbar from "../BottomNavbar/BottomNavbar";

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
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={true}
				draggable
				pauseOnHover={true}
				theme="colored"
			/>
			<div className="min-h-screen h-full grid grid-rows-layout pb-16 md:pb-0">
				{showModal && (
					<Backdrop hideModal={hideModal}>
						<Modal>
							{modalComponent === "login" && (
								<Login
									hideModal={hideModal}
									changeComponent={changeModalComponent}
								/>
							)}
							{modalComponent === "signup" && (
								<Signup
									hideModal={hideModal}
									changeComponent={changeModalComponent}
								/>
							)}
						</Modal>
					</Backdrop>
				)}

				{navbar && <Navbar showModal={displayModal} />}
				{children}
				{navbar && <Footer />}
				<BottomNavbar />
			</div>
		</>
	);
}
