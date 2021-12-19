import { TiScissors } from "react-icons/ti";
import { MdAdd } from "react-icons/md";

import LinkButton from "./Link_button.js";
import { useRouter } from "next/router";

export default function ServicesCard({ _id: id, title, showMore = false }) {
  const router = useRouter();
  return (
    <div
      className="shadow-lg px-5 py-10 flex items-center flex-col rounded-md cursor-pointer"
      onClick={() => router.replace("/category/" + id)}
    >
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
