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
import { fetchCategories, fetchReviews } from "../store/actions/appActions";
import { useEffect } from "react";
import Fuse from "fuse.js";
import AppReview from "../components/Commons/AppReview.js";
import SectionHeading from "../components/Commons/Section_heading.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../components/Commons/Container.js";

export default function Home() {
  const allCategories = useSelector((state) => state.app.allCategories);
  const reviews = useSelector((state) => state.app.reviews);
  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchReviews());
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
      <Features />
      {/* <About /> */}
      <div className="my-5 bg-[#F9FBFC] py-7">
        <SectionHeading title="Testimonials" />
        <Container>
          <Carousel
            emulateTouch
            infiniteLoop
            showIndicators
            swipeable
            showStatus={false}
          >
            {!!reviews.length &&
              reviews.map((review) => (
                <AppReview key={review._id} {...review} />
              ))}
          </Carousel>
        </Container>
      </div>
      <ContactUs />
    </>
  );
}
