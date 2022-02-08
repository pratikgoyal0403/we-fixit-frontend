import { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import DropDown from "../../Commons/DropDown";
import ElevatedButton from "../../Commons/Elevated_button";
import Input from "../../Commons/Input";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const starStyle = { color: "gold", fontSize: "28px", margin: "10px 3px" };

export default function Review_Form({ submitHandler, editId }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    review: "",
    rating: "",
  });
  const reviews = useSelector((state) => state.admin.reviews);
  useEffect(() => {
    if (editId) {
      const targetVal = reviews?.filter((s) => s._id === editId)?.pop();
      // console.log(targetVal);
      setValues((prevValue) => ({ ...targetVal }));
    }
  }, []);
  const changeHandler = (target, value) => {
    setValues((prevValue) => ({ ...prevValue, [target]: value }));
  };
  return (
    <div className="px-6 pt-6">
      <Input
        type="text"
        placeholder="username"
        name="username"
        value={values.username}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
      <Input
        type="text"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
      {/* <DropDown
        placeholder="Category"
        options={allCategories ? allCategories.map((c) => c.title) : []}
        selectedValue={values.category}
        change={(value) => changeHandler("category", value)}
      /> */}
      <div className="flex items-center justify-start">
        {[1, 2, 3, 4, 5].map((r) =>
          values.rating < r ? (
            <FiStar
              key={r}
              style={starStyle}
              onClick={() => changeHandler("rating", r)}
            />
          ) : (
            <FaStar
              key={r}
              style={starStyle}
              onClick={() => changeHandler("rating", r)}
            />
          )
        )}
      </div>
      <textarea
        placeholder="review"
        rows="5"
        className="w-full my-2 py-2 px-4 rounded focus:outline-none border"
        value={values.review}
        onChange={(e) => changeHandler("review", e.target.value)}
      ></textarea>
      <ElevatedButton title="save" click={submitHandler.bind(this, values)} />
    </div>
  );
}
