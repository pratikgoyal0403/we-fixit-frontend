import DropDown from "../Commons/DropDown.js";
import ServiceInput from "../Commons/Services_input";
import { AiOutlineSearch } from "react-icons/ai";

export default function ServicesInput() {
	return (
		<div className="w-3/5 bg-white flex items-center mx-auto -mt-10 rounded-xl py-5 px-5 shadow-xl">
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
