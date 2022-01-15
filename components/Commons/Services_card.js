import { TiScissors } from "react-icons/ti";
import { MdAdd } from "react-icons/md";

import LinkButton from "./Link_button.js";
import { useRouter } from "next/router";

export default function ServicesCard({ _id: id, title, showMore = false }) {
	const router = useRouter();
	return (
		<div
			className="shadow-md border px-4 py-6 lg:py-8 xl:py-10 md:w-40 lg:w-48 xl:w-56 flex items-center flex-col rounded-md cursor-pointer"
			onClick={() => router.replace("/category/" + id)}
		>
			{!showMore && (
				<>
					<TiScissors
						className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
						style={{ marginBottom: "15px" }}
					/>
					<h1 className="text-xs whitespace-nowrap xs:text-sm lg:text-regular text-center">
						{title}
					</h1>
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
