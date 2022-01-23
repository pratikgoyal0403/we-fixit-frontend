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
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/appActions";
import { useEffect } from "react";
import Fuse from "fuse.js";

export default function Home() {
	const allCategories = useSelector((state) => state.app.allCategories);
	const [search, setSearch] = useState("");
	const [filteredCategories, setFilteredCategories] = useState(allCategories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);
	useEffect(() => {
		if (!filteredCategories.length) {
			setFilteredCategories(allCategories);
		}
	}, [allCategories]);

	const filterResults = (e) => {
		if (e.target.value === "") {
			setSearch(e.target.value);
			setFilteredCategories(allCategories);
			return;
		}
		let fuse = new Fuse(allCategories, { keys: ["title"] });
		const result = fuse.search(e.target.value);
		setSearch(e.target.value);
		setFilteredCategories(result.map((r) => r.item));
	};

	return (
		<>
			<Header />
			<ServicesInput search={search} changeSearch={filterResults} />
			<AllServices
				categories={allCategories}
				filteredResult={filteredCategories}
			/>
			{/* <Features />
			<About />
			<ContactUs /> */}
		</>
	);
}
