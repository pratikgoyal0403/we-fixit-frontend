import Navbar from "../../components/Navbar/Navbar.js";
import ServiceInfoCard from "../../components/Commons/ServiceInfo_card.js";
import SectionHeading from "../../components/Commons/Section_heading.js";
import Footer from "../../components/Footer/Footer";
import { fetchCategoryServices } from "../../store/actions/appActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Services({ id }) {
  const services = useSelector((state) => state.app.services);
  const allCategories = useSelector((state) => state.app.allCategories);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchCategoryServices(id));
  }, []);
  return (
    <div className="py-20 min-h-[95vh]">
      <SectionHeading title={router.query.title} />
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 container mx-auto gap-6 md:gap-10 px-4 sm:px-10 mt-6 sm:mt-8 md:mt-10">
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
