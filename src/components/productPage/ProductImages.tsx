"use client";
import {fetchProductById} from "@/api";
import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import React, {useState} from "react";
import {BiLoaderAlt} from "react-icons/bi";

const ProductImages = ({id}: {id: string}) => {
	const [index, setIndex] = useState(0);
	const {
		data: productByID,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ["productByID"],
		queryFn: () => fetchProductById(id),
	});

	if (!productByID) {
		return null; // Handle the case where productByID is null or undefined
	}

	const images = productByID.images || [];

	return (
		<div className="py-12">
			<div className="h-[500px] relative rounded-md">
				{isLoading && isError ? (
					<div className="flex justify-center items-center h-full animate-spin">
						<BiLoaderAlt size={20} />
					</div>
				) : (
					<Image
						src={images[index]}
						alt={`Product Image ${index + 1}`}
						fill
						sizes="50vw"
						className="object-contain rounded-md"
					/>
				)}
			</div>
			<div className="flex gap-4 mt-8">
				{images.map((img, i) => (
					<div
						key={i}
						className={`w-1/4 h-32 relative cursor-pointer ${
							index === i ? "border-2 border-black rounded-md" : ""
						}`}
						onClick={() => setIndex(i)}
					>
						<Image
							src={img}
							alt={`Thumbnail ${i + 1}`}
							fill
							sizes="30vw"
							className="object-cover rounded-md"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductImages;
