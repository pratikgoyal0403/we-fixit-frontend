import { useState, useEffect, useRef } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function DropDown({
  icon1,
  options,
  selectedValue = null,
  placeholder = "",
  change,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown((prevValue) => !prevValue);
  const parent = useRef(null);
  const clickDetector = (e) => {
    if (parent.current && !parent.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickDetector);
    return () => document.removeEventListener("click", clickDetector);
  }, []);
  return (
    <div className="relative cursor-pointer border rounded p-2" ref={parent}>
      <div
        className="flex justify-between items-center px-3"
        onClick={toggleDropdown}
      >
        <p className="mr-1 whitespace-nowrap">
          {selectedValue ? selectedValue : placeholder}
        </p>
        {showDropdown ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </div>
      {showDropdown && (
        <div className="absolute bg-white shadow-md rounded-xl py-2 px-4 w-full my-3 left-0 z-50">
          <div>
            {!!options.length &&
              options.map((o, key) => (
                <p
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  key={key}
                  onClick={() => {
                    change(o);
                    setShowDropdown(false);
                  }}
                >
                  {o}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
