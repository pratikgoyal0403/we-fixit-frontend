import React from "react";
import { useRouter } from "next/router";
import {
	RiHome2Line,
	RiListUnordered,
	RiShoppingCartLine,
	RiUser3Line,
} from "react-icons/ri";

// <RiHome2Line />

const NavButton = ({ icon, title, active, onClick }) => (
	<button
		className={`flex flex-col border-t items-center flex-1 px-4 py-3 ${
			active ? "text-primary" : "text-gray-800"
		}`}
		onClick={onClick}
	>
		<div className="text-xl mb-1">{icon}</div>
		<p className="text-xs">{title}</p>
	</button>
);

const BottomNavbar = () => {
	const router = useRouter();
	const navItems = [
		{ id: 1, title: "Home", icon: <RiHome2Line />, path: "/" },
		{ id: 2, title: "Orders", icon: <RiListUnordered />, path: "/orders" },
		{ id: 3, title: "Cart", icon: <RiShoppingCartLine />, path: "/cart" },
		{ id: 4, title: "Profile", icon: <RiUser3Line />, path: "/profile" },
	];
	return (
		<div className="block md:hidden fixed left-0 right-0 bg-white bottom-0 w-full">
			<div className="flex items-center">
				{navItems.map((item) => (
					<NavButton
						key={item.id}
						active={router.asPath === item.path}
						onClick={() => router.push(item.path)}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default BottomNavbar;
