"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

import {useProductCollection} from "@/hooks/useProductCollection";

const TshirtSection = () => {
	const [activeButton, setActiveButton] = useState("shirt");
	const {productCollection} = useProductCollection();
	const router = useRouter();
	const handleButtonClick = (type: any) => {
		setActiveButton(type);
	};
	const filteredProducts =
		productCollection?.find((collection) => collection.type === activeButton)
			?.products || [];

	return (
		<section className="container mx-auto">
			<div className="flex flex-col items-center gap-4 pb-10">
				<div className="space-x-4">
					<button
						onClick={() => handleButtonClick("shirt")}
						className={`px-5 py-2 border rounded-lg ${
							activeButton === "shirt" ? "bg-black text-white" : "bg-white text-black"
						}`}
					>
						Shirt
					</button>
					<button
						onClick={() => handleButtonClick("t-shirt")}
						className={`px-5 py-2 border rounded-lg ${
							activeButton === "t-shirt"
								? "bg-black text-white"
								: "bg-white text-black"
						}`}
					>
						T-shirt
					</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{filteredProducts?.map((product, index) => (
						<div key={index}>
							<div className="mt-2 relative overflow-hidden">
								<div
									className="group relative h-80 w-48 overflow-hidden cursor-pointer"
									onClick={() => router.push(`/products/${product.title}-${product.id}`)}
								>
									<Image
										className={`absolute  top-0 left-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0`}
										src={product.images[0]}
										alt={product.title}
										width={250}
										height={250}
									/>
									<Image
										className={`absolute top-0  left-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100`}
										src={product.images[1]}
										alt={product.title}
										width={250}
										height={250}
									/>
								</div>
								<div className="flex items-center cursor-pointer flex-col gap-y-2 py-4">
									<h1 className="text-xl font-medium line-clamp-1">{product?.title}</h1>
									{product?.price && <p> {`₹ ${product?.price}`}</p>}
									<div className="flex gap-2">
										{product?.size?.map((size: string, index: any) => (
											<p className="text-gray-500 text-sm hover:underline" key={index}>
												{size}
											</p>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<button
					type="button"
					className="tracking-widest text-xs font-sans px-6 py-2 border hover:border-black"
					onClick={() => router.push(`/collections/${activeButton}`)}
				>
					VIEW ALL
				</button>
			</div>
		</section>
	);
};

export default TshirtSection;
