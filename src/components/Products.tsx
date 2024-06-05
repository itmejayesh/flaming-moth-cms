import {Product} from "@/api";
import React from "react";

const Products = ({product}: {product: Product}) => {
	return (
		<div>
			<div
				className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden 
            rounded-md bg-gray-200 lg:h-80"
			>
				<img
					src={product.images[0]}
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div>
				<div className="mt-4 flex justify-between">
					<h3 className="text-sm text-gray-700">{product.title}</h3>
					<p className="mt-1 text-sm text-gray-500">{product.size}</p>
				</div>
				<p className="text-sm font-medium text-gray-900">{product.price}</p>
			</div>
		</div>
	);
};

export default Products;
