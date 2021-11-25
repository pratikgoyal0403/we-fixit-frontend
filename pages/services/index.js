import Navbar from "../../components/Navbar/Navbar.js";
import ServicesHeader from "../../components/Services_header/Services_header.js";
import ServicesInput from "../../components/Services_input/Services_input.js";
import AllServices from "../../components/Services_allService/AllService.js";
import Footer from "../../components/Footer/Footer";

export default function Services() {
	return (
		<div>
			<Navbar />
			<ServicesHeader />
			<ServicesInput />
			<AllServices />
			<Footer />
		</div>
	);
}
