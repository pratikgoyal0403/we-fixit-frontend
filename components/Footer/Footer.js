import Link from "next/link";
import Container from "../Commons/Container";

export default function Footer() {
	return (
		<div className="bg-black hidden md:block">
			<Container>
				<div className="w-3/4 mx-auto py-2 flex items-center justify-between">
					<p className="text-white">About</p>
					<p className="text-white">Contact us</p>
					<p className="text-white">Contact us</p>
					<p className="text-white">Contact us</p>
				</div>
			</Container>
		</div>
	);
}
