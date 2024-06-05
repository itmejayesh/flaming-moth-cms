"use client";
import {fetchAllProducts} from "@/api";
import ProductCards from "@/components/ProductCard";
import Products from "@/components/Products";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";

const chevronDown = (
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
		className="size-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m4.5 15.75 7.5-7.5 7.5 7.5"
		/>
	</svg>
);

const SORT_OPTIONS = [
	{name: "None", value: "none"},
	{name: "Newly Added", value: "uploaded-date"},
	{name: "Best Selling", value: ""},
	{name: "Price (High to Low)", value: "price-dsc"},
	{name: "Price (Low to High)", value: "price-asc"},
] as const;

const CollectionPage = ({params}: {params: {slug: string}}) => {
	const [filter, setFilter] = useState({sort: "none"});
	const {data} = useQuery({queryKey: ["products"], queryFn: fetchAllProducts});

	console.log(data);
	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between border-b pb-6 pt-24 items-baseline">
				<h1>high quality cotton selection</h1>
				<div className="flex items-center">
					<DropdownMenu>
						<DropdownMenuTrigger
							className="group inline-flex justify-center 
						text-sm text-gray-900 hover:text-gray-900 font-medium"
						>
							Sort{" "}
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
										{"text-gray-500": option.value !== filter.sort}
									)}
									key={index}
									onClick={() =>
										setFilter((prev) => ({
											...prev,
											sort: option.value,
										}))
									}
								>
									{option.name}
								</button>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<section>
				{/* filters */}
				<div></div>
				{/* products */}
				<div>
					{data?.map((product) => (
						<Products product={product} />
					))}
				</div>
			</section>
		</main>
	);
};

export default CollectionPage;
