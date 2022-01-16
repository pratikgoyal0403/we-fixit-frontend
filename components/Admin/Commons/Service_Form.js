import DropDown from "../../Commons/DropDown";
import ElevatedButton from "../../Commons/Elevated_button";
import Input from "../../Commons/Input";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ServiceForm({ editId, onSubmit }) {
  const [values, setValues] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    features: "",
  });
  const allCategories = useSelector((state) => state.admin.categories);
  const services = useSelector((state) => state.admin.services);
  useEffect(() => {
    if (editId) {
      const service = services?.filter((s) => s._id === editId).pop();
      setValues((prevValue) => ({
        ...service,
        category: allCategories.filter((c) => c._id == service.category).pop()
          .title,
        features: service.features.join("\n"),
      }));
    }
  }, []);
  const changeHandler = (field, value) => {
    setValues((prevValue) => ({ ...prevValue, [field]: value }));
  };
  const submitHandler = () => {
    onSubmit({
      ...values,
      category: allCategories.find((c) => c.title === values.category)._id,
    });
  };
  return (
    <div className="px-6 pt-6">
      <Input
        type="text"
        placeholder="title"
        name="title"
        value={values.title}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
      <Input
        type="number"
        placeholder="price"
        name="price"
        value={values.price}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
      />
      <DropDown
        placeholder="Category"
        options={allCategories ? allCategories.map((c) => c.title) : []}
        selectedValue={values.category}
        change={(value) => changeHandler("category", value)}
      />
      <Input
        type="file"
        className="my-3"
        filename={values.image?.name}
        onChange={(e) => changeHandler("image", e.target.files[0])}
      />
      <textarea
        placeholder="Features"
        rows="5"
        className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
        value={values.features}
        onChange={(e) => changeHandler("features", e.target.value)}
      ></textarea>
      <ElevatedButton title="save" click={submitHandler} />
    </div>
  );
}
