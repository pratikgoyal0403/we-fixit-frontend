import { useState, useEffect } from "react";
import { getToken } from "../../utils/token-handler";
import { useRouter } from "next/router";

export default function (Component) {
  return (props) => {
    const [verified, setVerified] = useState(false);
    const router = useRouter();
    useEffect(() => {
      const token = getToken();
      if (!token) {
        router.replace("/");
      } else {
        ///verify token data here
      }
    }, []);
    if (verified) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
}
