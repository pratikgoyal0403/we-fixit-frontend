import Link from "next/link";
import ElevatedButton from "../Commons/Elevated_button";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Navbar({ showModal }) {
  const authDetails = useSelector((state) => state.auth);
  const router = useRouter();
  return (
    <div className="container bg-transparent fixed py-3 flex items-center justify-between px-40">
      <nav>
        <a href="#" className="text-white text-xl">
          we fixit
        </a>
      </nav>
      <nav>
        <ul className="flex items-center justify-center">
          {authDetails?.isLoggedIn && (
            <li
              className="text-white mx-3"
              onClick={() => router.push("/cart")}
            >
              cart
            </li>
          )}
          {!authDetails?.isLoggedIn && (
            <li
              className="text-white mx-3 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-sm bg-primary"
              onClick={() => showModal("login")}
            >
              Login / Signup
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
