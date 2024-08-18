"use client";
import { fetchAllProducts } from "@/api";
import Products from "@/components/Products";
import ProductSkeleton from "@/components/ProductSkeleton";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SORT_OPTIONS, SUBCATEGORIES } from "@/constants/constant";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const chevronDown = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m19.5 8.25-7.5 7.5-7.5-7.5"
		/>
	</svg>
);

const chevronUp = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m4.5 15.75 7.5-7.5 7.5 7.5"
		/>
	</svg>
);

const filterIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
		/>
	</svg>
);

const CollectionPage = ({ params }: { params: { slug: string } }) => {
	const [filter, setFilter] = useState({ sort: "none" });

	const { data } = useQuery({
		queryKey: ["products"],
		queryFn: fetchAllProducts,
	});

	console.log(filter.sort);
	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between border-b pb-6 pt-24 items-baseline">
				<h1>high quality cotton selection</h1>
				<div className="flex items-center">
					<DropdownMenu>
						<DropdownMenuTrigger
							className="group inline-flex justify-center 
						text-sm text-gray-900 hover:text-gray-900 font-medium">
							Sort
							<span className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
								{chevronDown}
							</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{SORT_OPTIONS.map((option, index) => (
								<button
									className={cn(
										"text-left w-full block px-4 py-2 text-xs",
										{
											"text-gray-900 bg-gray-100": option.value === filter.sort,
										},
										{ "text-gray-500": option.value !== filter.sort }
									)}
									key={index}
									onClick={() =>
										setFilter((prev) => ({
											...prev,
											sort: option.value,
										}))
									}>
									{option.name}
								</button>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<button className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-2 lg:hidden">
						{filterIcon}
					</button>
				</div>
			</div>
			<section className="pb-24 pt-6">
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
					{/* filters */}
					<div className="hidden lg:block">
						<ul
							className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium
						text-gray-800">
							{SUBCATEGORIES.map((category) => (
								<li>
									<button
										disabled={!category.selected}
										className="disabled:cursor-not-allowed disabled:opacity-60">
										{category.name}
									</button>
								</li>
							))}
						</ul>
					</div>
					{/* products */}
					<ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{data
							? data?.map((product) => <Products product={product} />)
							: new Array(12)
									.fill(null)
									.map((_, i) => <ProductSkeleton key={i} />)}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default CollectionPage;
