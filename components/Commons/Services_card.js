import { TiScissors } from "react-icons/ti";
import { MdAdd } from "react-icons/md";

import LinkButton from "./Link_button.js";

export default function ServicesCard({ title, showMore = false }) {
  return (
    <div className="shadow-lg px-5 py-10 flex items-center flex-col rounded-md cursor-pointer">
      {!showMore && (
        <>
          <TiScissors style={{ fontSize: "4rem", marginBottom: "15px" }} />
          <h1 className="text-center">{title}</h1>
        </>
      )}
      {showMore && (
        <>
          <MdAdd
            style={{ fontSize: "4rem", marginBottom: "15px" }}
            className="text-primary "
          />
          <LinkButton title="View More" />
        </>
      )}
    </div>
  );
}
