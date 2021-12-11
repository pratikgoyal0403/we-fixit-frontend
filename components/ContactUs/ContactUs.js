import Heading from "../Commons/Section_heading";
import Input from "../Commons/Input.js";
import ElevatedButton from "../Commons/Elevated_button.js";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="my-20">
      <Heading title="Contact Us" />
      <div className="w-3/4 my-10 rounded mx-auto  grid grid-cols-2">
        <div className="pr-16">
          <h1 className="text-3xl font-semibold text-gray-600">Get a quote </h1>
          <p className="text-gray-500 my-2 mb-10">
            Fill up the form and our Team will get back to you within 24 hours
          </p>
          <div className="flex items-center mb-5">
            <MdEmail className="text-2xl text-primary" />
            <p className="ml-4 text-lg">wefixit@gmail.com</p>
          </div>
          <div className="flex items-center mb-5">
            <MdLocationOn  className="text-2xl text-primary" />
            <p className="ml-4 text-lg">12 street, fictional town, 201919, some state, India</p>
          </div>
        </div>
        <div className="w-2/3">
          <div className="">
            <Input type="text" placeholder="Name" />
          </div>
          <div>
            <Input type="text" placeholder="Email" />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
            ></textarea>
          </div>
          <ElevatedButton
            title="Submit"
            Icon2={<RiSendPlaneFill className="ml-2 text-lg" />}
          />
        </div>
      </div>
    </div>
  );
}
