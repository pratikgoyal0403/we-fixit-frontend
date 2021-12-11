import Link from "next/link";
import ElevatedButton from "../Commons/Elevated_button";

export default function Navbar({ showModal }) {
  return (
    <div className="container bg-transparent fixed py-3 flex items-center justify-between px-40">
      <nav>
        <a href="#" className="text-white text-xl">
          we fixit
        </a>
      </nav>
      <nav>
        <ul className="flex items-center justify-center">
          <li className="text-white mx-3">about</li>
          <li
            className="text-white mx-3 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-sm bg-primary"
            onClick={() => showModal("login")}
          >
            Login / Signup
          </li>
        </ul>
      </nav>
    </div>
  );
}
