import Navbar from "../../components/Navbar/Navbar.js";
import ServiceInfoCard from "../../components/Commons/ServiceInfo_card.js";
import SectionHeading from "../../components/Commons/Section_heading.js";
import Footer from "../../components/Footer/Footer";
import { fetchCategoryServices } from "../../store/actions/appActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Services({ id }) {
  const services = useSelector((state) => state.app.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryServices(id));
  }, []);
  return (
    <div className="py-20 h-[95vh]">
      <SectionHeading title="Mens Hair cut" />
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container mx-auto sm:gap-5 md:gap-10 px-10 mt-10">
        {services &&
          services.map((service) => (
            <ServiceInfoCard key={service._id} {...service} />
          ))}
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}
