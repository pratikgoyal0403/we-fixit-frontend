import Navbar from "../components/Navbar/Navbar.js";
import Header from "../components/Header/Header.js";
import Features from "../components/Features/Features.js";
import Services from "../components/Services/Services.js";
import About from "../components/About/About.js";
import ContactUs from "../components/ContactUs/ContactUs.js";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Services />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
