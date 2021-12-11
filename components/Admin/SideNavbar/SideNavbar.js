import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function SideNavbar() {
  const [currentPath, setCurrentPath] = useState("/admin/dashboard");
  const checkIfActive = (link) => {
    return link === currentPath;
  };
  const router = useRouter();
  useEffect(() => {
    setCurrentPath(router.asPath);
  }, []);
  return (
    <div className="bg-justWhite border-r px-4 flex justify-center flex-col">
      <h1 className="font-bold text-xl">we fixit</h1>
      <ul className="flex-1 flex flex-col items-stretch justify-center">
        <Link href="/admin/dashboard">
          <li
            className={
              "hover:bg-justPrimary pl-10 font-semibold text-lg py-3 rounded-lg mt-1 cursor-pointer " +
              (checkIfActive("/admin/dashboard") ? "bg-primary text-white" : "")
            }
          >
            dashboard
          </li>
        </Link>
        <Link href="/admin/services">
          <li
            className={
              "hover:bg-justPrimary pl-10 font-semibold text-lg py-3 rounded-lg mt-1 cursor-pointer " +
              (checkIfActive("/admin/services") ? "bg-primary text-white" : "")
            }
          >
            services
          </li>
        </Link>
        <Link href="/admin/orders">
          <li
            className={
              "hover:bg-justPrimary pl-10 font-semibold text-lg py-3 rounded-lg mt-1 cursor-pointer " +
              (checkIfActive("/admin/orders") ? "bg-primary text-white" : "")
            }
          >
            orders
          </li>
        </Link>
      </ul>
    </div>
  );
}