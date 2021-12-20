import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../store/actions/userActions";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return <h1>this is profile page</h1>;
}
