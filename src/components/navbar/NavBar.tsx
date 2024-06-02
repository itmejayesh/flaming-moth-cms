"use client";
import React, {useEffect} from "react";
import AnnouncementBar from "./AnnouncementBar";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import debounce from "debounce";
import CartItems from "../cartItems/CartItems";

const userIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
		/>
	</svg>
);
const searchIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
		/>
	</svg>
);
const addToFavIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
		/>
	</svg>
);

const NavBar = () => {
	const [header, setHeader] = React.useState(false);
	const scrollHeader = () => {
		if (window.scrollY >= 180) {
			setHeader(true);
		} else {
			setHeader(false);
		}
	};

	useEffect(() => {
		const debouncedScroll = debounce(scrollHeader, 100);
		window.addEventListener("scroll", debouncedScroll);

		return () => {
			window.removeEventListener("scroll", debouncedScroll);
		};
	}, []);

	return (
		<nav
			className={`flex flex-col w-full bg-white z-10 shadow-md transition-transform duration-500 ease-in-out ${
				header ? "sticky top-0 mb-2 bg-black visible" : ""
			}`}
		>
			<div className="bg-black">
				<AnnouncementBar />
			</div>
			<div className="container mx-auto">
				<div className="flex items-center justify-between ">
					<Link href={`/`}>
						<Image
							src={`/assets/logo.png`}
							alt="logo"
							width={350}
							height={100}
							className="w-[200px] md:w-auto h-auto "
						/>
					</Link>
					<div className="flex  gap-6 justify-center items-center">
						<div className="flex gap-2">
							<div className="size-6">{userIcon}</div>
							<div className="size-6">{searchIcon}</div>
							<div className="size-6">{addToFavIcon}</div>
							<CartItems />
							<Menu />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
