import DropDown from "../Commons/DropDown.js";
import ServiceInput from "../Commons/Services_input";
import { AiOutlineSearch } from "react-icons/ai";

export default function ServicesInput() {
	return (
		<div className="container max-w-4xl w-10/12 sm:w-11/12 mx-auto bg-white flex flex-col sm:flex-row sm:items-center rounded-xl py-5 px-5 shadow-xl -m-10 relative z-10">
			<div className="flex-[2] mb-3 sm:mb-0 sm:mr-2 md:mr-5">
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
