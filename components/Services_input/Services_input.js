import DropDown from "../Commons/DropDown.js";
import ServiceInput from "../Commons/Services_input";
import { AiOutlineSearch } from "react-icons/ai";

export default function ServicesInput() {
  return (
    <div className="w-2/4 mx-auto bg-white flex items-center rounded-xl py-5 px-5 shadow-xl -m-10 relative z-10">
      <div className="flex-[2] mr-5">
        <DropDown />
      </div>
      <div className="flex-[4]">
        <ServiceInput
          placeholder="search for service"
          Icon1={<AiOutlineSearch />}
        />
      </div>
    </div>
  );
}
