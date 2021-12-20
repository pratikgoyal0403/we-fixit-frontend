import { useState } from "react";
import DropDown from "../Commons/DropDown.js";
import ServiceInput from "../Commons/Services_input";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchCategories } from "../../store/actions/appActions";
import { useDispatch } from "react-redux";

export default function ServicesInput({ search, changeSearch }) {
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  const searchForCategories = (value) => {
    setLocation(value);
    dispatch(fetchCategories({ location: value }));
  };
  return (
    <div className="w-2/4 mx-auto bg-white flex items-center rounded-xl py-5 px-5 shadow-xl -m-10 relative z-10">
      <div className="flex-[2] mr-5">
        <DropDown
          options={["Muzaffarpur", "Darbhanga", "Sitamarhi"]}
          selectedValue={location}
          change={searchForCategories}
          placeholder="Select Location"
        />
      </div>
      <div className="flex-[4]">
        <ServiceInput
          placeholder="search for services"
          value={search}
          onChange={changeSearch}
          Icon1={<AiOutlineSearch />}
        />
      </div>
    </div>
  );
}
