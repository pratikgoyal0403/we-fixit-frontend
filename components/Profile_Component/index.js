import { useEffect, useState } from "react";
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import SectionHeading from "../Commons/Section_heading";
import { updateUserProfile } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import DropDown from "../Commons/DropDown";

export default function ProfileComponent({ userInfo }) {
  const [values, setValues] = useState({
    firstname: userInfo?.firstname || "",
    lastname: userInfo?.lastname || "",
    email: userInfo?.email || "",
    address: userInfo?.address || "",
    gender: userInfo?.gender || "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setValues((prevValues) => ({ ...prevValues, ...userInfo }));
  }, [userInfo]);

  const changeDetector = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };
  const updateProfile = () => {
    dispatch(updateUserProfile(values));
  };
  return (
    <div className="w-full h-full pt-24">
      <SectionHeading title="My Profile" />
      <div className="w-full h-full pt-10">
        <div className="w-1/3 mx-auto shadow-lg p-5 rounded-lg">
          <div className="mb-4">
            <p className="capitalize font-semibold mb-1">firstname: </p>
            <Input
              placeholder="First name"
              name="firstname"
              value={values.firstname}
              onChange={changeDetector}
            />
          </div>
          <div className="mb-4">
            <p className="capitalize font-semibold mb-1">Lastname: </p>
            <Input
              placeholder="Last name"
              name="lastname"
              value={values.lastname}
              onChange={changeDetector}
            />
          </div>
          <div className="mb-4">
            <p className="capitalize font-semibold mb-1">Email: </p>
            <Input
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={changeDetector}
            />
          </div>
          <div className="mb-4">
            <p className="capitalize font-semibold mb-1">Address: </p>
            <Input
              placeholder="Address"
              name="address"
              value={values.address}
              onChange={changeDetector}
            />
          </div>
          <div className="mb-4">
            <p className="capitalize font-semibold mb-1">Gender: </p>
            <DropDown
              options={["Male", "Female"]}
              placeholder="select gender"
              selectedValue={values.gender}
              change={(value) =>
                changeDetector({ target: { value: value, name: "gender" } })
              }
            />
          </div>
          <ElevatedButton title="save" click={updateProfile} />
        </div>
      </div>
    </div>
  );
}
