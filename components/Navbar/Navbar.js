import { useEffect, useState } from "react";
import Link from "next/link";
import ElevatedButton from "../Commons/Elevated_button";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logoutHandler as logout } from "../../store/actions/authActions";
import Badge from "../badge/badge";

export default function Navbar({ showModal }) {
  const [scrolledBeyond, setScrolledBeyond] = useState(false);
  const authDetails = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  function scrollHandler() {
    if (this.scrollY > 350) {
      setScrolledBeyond(true);
    } else if (window.location.pathname === "/") {
      setScrolledBeyond(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  useEffect(() => {
    if (router.asPath !== "/") return setScrolledBeyond(true);
    else {
      return setScrolledBeyond(false);
    }
  }, [router.asPath]);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div
      className={
        "w-full fixed z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-40 " +
        (scrolledBeyond ? " bg-white shadow-md" : " bg-transparent")
      }
    >
      <nav>
        <a
          href="#"
          className={"text-xl " + (scrolledBeyond ? " " : " text-white")}
        >
          <img
            src={scrolledBeyond ? "/images/logo-acc.png" : "/images/logo.png"}
            alt="we fixit"
            style={{ width: "100px" }}
            onClick={() => router.push("/")}
          />
        </a>
      </nav>
      <nav>
        <ul className="flex items-center justify-center">
          {authDetails?.isLoggedIn && (
            <>
              <div className="hidden md:flex items-center justify-center">
                <li
                  className={
                    " mx-3 cursor-pointer px-2 rounded hover:bg-primary hover:text-white " +
                    (scrolledBeyond ? "" : "text-white")
                  }
                  onClick={() => router.push("/")}
                >
                  Home
                </li>
                <li
                  className={
                    " mx-3 cursor-pointer px-2 rounded hover:bg-primary hover:text-white " +
                    (scrolledBeyond ? "" : "text-white")
                  }
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </li>
                <li
                  className={
                    "mx-3 cursor-pointer px-2 rounded hover:bg-primary hover:text-white " +
                    (scrolledBeyond ? "" : "text-white")
                  }
                  onClick={() => router.push("/orders")}
                >
                  My Booking
                </li>
                <li
                  className={
                    "mx-3 cursor-pointer px-2 rounded hover:bg-primary hover:text-white " +
                    (scrolledBeyond ? "" : "text-white")
                  }
                  onClick={() => router.push("/cart")}
                >
                  <div className="relative">
                    {/* <Badge /> */}
                    Cart
                  </div>
                </li>
              </div>
              <li
                className={
                  "text-white mx-3 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-sm bg-primary "
                }
                onClick={logoutHandler}
              >
                Logout
              </li>
            </>
          )}
          {!authDetails?.isLoggedIn && (
            <li
              className="text-white md:mx-3 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-3 sm:px-4 py-1 border border-transparent rounded-md shadow-sm text-sm md:text-base font-sm bg-primary"
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
