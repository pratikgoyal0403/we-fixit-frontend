import Navbar from "../../components/Navbar/Navbar.js";
import ServiceInfoCard from "../../components/Commons/ServiceInfo_card.js";
import SectionHeading from "../../components/Commons/Section_heading.js";
import Footer from "../../components/Footer/Footer";

export default function Services() {
  return (
    <div className="py-20 h-[95vh]">
      <SectionHeading title="Mens Hair cut" />
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container mx-auto sm:gap-5 md:gap-10 px-10 mt-10">
        <ServiceInfoCard />
        <ServiceInfoCard />
        <ServiceInfoCard />
      </div>
    </div>
  );
}
