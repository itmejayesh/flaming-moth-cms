import { Product } from "@/api";
import React from "react";

const Products = ({ product }: { product: Product }) => {
	return (
		<div className="group relative">
			<div
				className="aspect-auto lg:aspect-none w-full overflow-hidden 
            rounded-md bg-gray-200 lg:h-80">
				<img
					src={product.images[0]}
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="space-y-3 my-2">
				<h3 className="text-sm text-gray-900/80 font-medium">
					{product.title}
				</h3>
				<p className="mt-1 text-xs text-gray-900/80">{`INR ${product.price}`}</p>
				<div className="flex items-center mt-2 space-x-4">
					{product.size.map((size, index) => (
						<p key={index} className="text-xs text-gray-900/80">
							{size}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
