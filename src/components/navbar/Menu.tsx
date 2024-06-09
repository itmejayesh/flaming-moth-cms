"use client";
import {sideBarMenuList} from "@/constants/constant";
import Link from "next/link";
import React from "react";

const barsIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
		/>
	</svg>
);

const crossIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
	</svg>
);

const userIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
		/>
	</svg>
);

const Menu = () => {
	const [open, setOpen] = React.useState(false);
	const handleToggle = () => {
		setOpen((prev) => !prev);
		console.log("im clicked");
	};

	React.useEffect(() => {
		if (open) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		// Clean up the effect
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [open]);

	return (
		<>
			<div onClick={handleToggle} className="cursor-pointer">
				{barsIcon}
			</div>

			<div
				className={`fixed inset-0 bg-slate-200/80 z-10 transition-opacity 
				duration-300 ease-in-out ${
					open ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={handleToggle}
			>
				<aside
					className={`fixed top-0 left-0 w-[270px] max-w-xs h-full bg-white
					 text-black shadow-lg transform transition-transform duration-300 ease-in-out ${
							open ? "translate-x-0" : "-translate-x-full"
						}`}
					onClick={(e) => e.stopPropagation()} // Prevent closing sidebar when clicking inside
				>
					<div className="flex flex-col justify-between items-center p-4">
						<div className="flex justify-between w-full mb-4">
							<div className="flex gap-2">
								{userIcon}
								<h2 className="">Login</h2>
							</div>
							<button type="button" onClick={handleToggle}>
								{crossIcon}
							</button>
						</div>

						<div className="divide-y w-full border-t border-b mt-4">
							{sideBarMenuList.map((items, index) => (
								<Link
									href={`#`}
									key={index}
									className="grid py-5 tracking-widest hover:bg-slate-200 pl-2"
								>
									{items}
								</Link>
							))}
						</div>
					</div>
				</aside>
			</div>
		</>
	);
};

export default Menu;
