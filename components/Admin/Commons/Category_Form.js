import DropDown from "../../Commons/DropDown";
import ElevatedButton from "../../Commons/Elevated_button";
import Input from "../../Commons/Input";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CategoryForm({ editId, onSubmit }) {
  const [values, setValues] = useState({ title: "", locations: [], image: "" });
  const allCategories = useSelector((state) => state.admin.categories);
  useEffect(() => {
    if (editId) {
      const categories = allCategories?.filter((s) => s._id === editId).pop();
      setValues(categories);
    }
  }, []);
  const changeHandler = (value, field) => {
    setValues((prevValue) => ({ ...prevValue, [field]: value }));
  };
  const checkboxChangeHandler = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    if (isChecked) {
      setValues((prevValue) => ({
        ...prevValue,
        locations: [...prevValue.locations, value],
      }));
    } else {
      setValues((prevValue) => ({
        ...prevValue,
        locations: prevValue.locations.filter((v) => v !== value),
      }));
    }
  };
  const checkIfContains = (location) => {
    return values.locations.includes(location);
  };

  return (
    <div className="px-6 pt-6">
      <Input
        placeholder="title"
        value={values.title}
        onChange={(e) => changeHandler(e.target.value, "title")}
      />
      {/* <DropDown
        options={["Muzaffarpur", "Darbhanga", "Sitamarhi"]}
        placeholder="location"
        selectedValue={values.location}
        change={(value) => changeHandler(value, "location")}
      /> */}
      <Input
        type="file"
        placeholder="select an image"
        filename={values.image?.name || values.image}
        onChange={(e) => changeHandler(e.target.files[0], "image")}
      />
      <p className="text-lg font-semibold">Locations</p>
      <div className="flex items-center justify-between flex-wrap my-2">
        <div className="flex items-center justify-start">
          <input
            type="checkbox"
            value="Muzaffarpur"
            checked={checkIfContains("Muzaffarpur")}
            onChange={checkboxChangeHandler}
            className="mr-2 my-1"
          />
          <p>Muzaffarpur</p>
        </div>
        <div className="flex items-center justify-start">
          <input
            type="checkbox"
            value="Darbhanga"
            checked={checkIfContains("Darbhanga")}
            onChange={checkboxChangeHandler}
            className="mr-2 my-1"
          />
          <p>Darbhanga</p>
        </div>
        <div className="flex items-center justify-start">
          <input
            type="checkbox"
            value="Sitamarhi"
            checked={checkIfContains("Sitamarhi")}
            onChange={checkboxChangeHandler}
            className="mr-2 my-1"
          />
          <p>Sitamarhi</p>
        </div>
      </div>
      <ElevatedButton title="save" click={onSubmit.bind(this, values)} />
    </div>
  );
}
