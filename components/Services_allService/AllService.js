import { useEffect } from "react";
import ServiceCards from "../Commons/Services_card.js";
import { fetchCategories } from "../../store/actions/appActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Commons/Loader.js";

export default function AllServices() {
  const allCategories = useSelector((state) => state.app.allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="py-20">
      <div className="w-11/12 mx-auto grid grid-cols-6 gap-10">
        {!allCategories && <Loader />}
        {allCategories &&
          allCategories.map((category) => (
            <ServiceCards key={category._id} {...category} />
          ))}
      </div>
    </div>
  );
}
