import { useState } from "react";
import { useDispatch } from "react-redux";
import ElevatedButton from "../../components/Commons/Elevated_button";
import Input from "../../components/Commons/Input";
import SectionHeading from "../../components/Commons/Section_heading";
import { adminLogin } from "../../store/actions/authActions";

export default function AdminLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (field, e) => {
    setValues((prevValue) => ({ ...prevValue, [field]: e.target.value }));
  };
  const submitHandler = () => {
    dispatch(adminLogin(values));
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <SectionHeading title="Admin Login" />
      <div className="w-1/3 shadow-lg p-12 mt-4 rounded-lg">
        <Input
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange.bind(this, "email")}
          required
        />
        <Input
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange.bind(this, "password")}
          required
        />
        <ElevatedButton title="Login" click={submitHandler} />
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      navbar: false,
    },
  };
};
