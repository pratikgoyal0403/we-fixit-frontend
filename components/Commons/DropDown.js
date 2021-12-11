import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function DropDown({ icon1 }) {
	const [showDropdown, setShowDropdown] = useState(false);
	const toggleDropdown = () => setShowDropdown((prevValue) => !prevValue);

	return (
		<div className="relative cursor-pointer border rounded p-2">
			<div
				className="flex justify-between items-center px-3"
				onClick={toggleDropdown}
			>
				<p>Select Location</p>
				{showDropdown ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
			</div>
			{showDropdown && (
				<div className="absolute bg-white shadow-md rounded-xl py-2 px-4 w-full my-3 left-0 z-50">
					<div>
						<p className="p-2 hover:bg-gray-100 rounded-lg">
							location 1
						</p>
						<p className="p-2 hover:bg-gray-100 rounded-lg">
							location 2
						</p>
						<p className="p-2 hover:bg-gray-100 rounded-lg">
							location 3
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
