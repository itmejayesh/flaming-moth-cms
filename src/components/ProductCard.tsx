"use client";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Star = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="size-3"
	>
		<path
			fillRule="evenodd"
			d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
			clipRule="evenodd"
		/>
	</svg>
);

const ProductCards = ({product}: {product: any}) => {
	const router = useRouter();
	return (
		<div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
			<div className=" flex items-center cursor-pointer flex-col gap-y-3">
				<div className="group relative h-96 w-72 overflow-hidden mx-2">
					<Image
						className={`absolute  top-0 left-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0`}
						src={product.image}
						alt={product.title}
						width={250}
						height={250}
					/>
					<Image
						className={`absolute top-0  left-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100`}
						src={product.onHoverImage}
						alt={product.title}
						width={250}
						height={250}
					/>
				</div>

				<div className="flex">
					{Array.from({length: product.stars}).map((_, index) => (
						<div key={index}>{Star}</div>
					))}
				</div>
				<h1 className="text-xl font-medium line-clamp-1">{product?.title}</h1>
				{product?.price && <p> {`₹ ${product?.price}`}</p>}
				<div className="flex gap-2 pb-6 md:pb-0">
					{product?.size?.map((size: string, index: any) => (
						<p className="text-gray-500 text-sm hover:underline" key={index}>
							{size}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCards;
