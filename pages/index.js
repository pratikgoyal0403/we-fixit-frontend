import Navbar from "../components/Navbar/Navbar.js";
import Header from "../components/Header/Header.js";
import Features from "../components/Features/Features.js";
import About from "../components/About/About.js";
import ContactUs from "../components/ContactUs/ContactUs.js";
import Footer from "../components/Footer/Footer.js";
import ServiceHeader from "../components/Services_header/Services_header.js";
import ServicesInput from "../components/Services_input/Services_input.js";
import AllServices from "../components/Services_allService/AllService.js";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ServicesInput />
      <AllServices />
      <Features />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
