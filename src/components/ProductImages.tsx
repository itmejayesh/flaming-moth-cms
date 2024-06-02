"use client";
import Image from "next/image";
import React, {useState} from "react";

const images = [
	{
		url: "/assets/08.jpg",
	},
	{
		url: "/assets/08b.jpg",
	},
	{
		url: "/assets/10.jpg",
	},
	{
		url: "/assets/11.jpg",
	},
	{
		url: "/assets/12.jpg",
	},
];

const ProductImages = () => {
	const [index, setIndex] = useState(0);

	return (
		<div className="py-12">
			<div className="h-[500px] relative rounded-md">
				<Image
					src={images[index].url}
					alt={`Product Image ${index + 1}`}
					fill
					sizes="50vw"
					className="object-contain rounded-md"
				/>
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
							src={img.url}
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
