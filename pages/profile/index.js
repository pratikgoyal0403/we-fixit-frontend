import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileComponent from "../../components/Profile_Component";
import { getUserProfile } from "../../store/actions/userActions";

export default function Profile() {
  const userInfo = useSelector(state => state.user.userInfo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return <ProfileComponent userInfo={userInfo}/>;
}
