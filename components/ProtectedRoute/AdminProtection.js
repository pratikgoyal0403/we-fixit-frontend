import { useState, useEffect } from "react";
import { getToken } from "../../utils/token-handler";
import { useRouter } from "next/router";
import jwt from "jwt-decode";
import Loader from "../Commons/Loader";

export default function (Component) {
  return (props) => {
    const [verified, setVerified] = useState(false);
    const router = useRouter();
    useEffect(() => {
      const token = getToken();
      if (!token) {
        router.replace("/admin");
      } else {
        ///verify token data here
        const decoded = jwt(token);
        if (decoded?.admin) {
          setVerified(true);
        }
      }
    }, []);
    if (verified) {
      return <Component {...props} />;
    } else {
      return (
        <div className="pt-26">
          <Loader />
        </div>
      );
    }
  };
}
