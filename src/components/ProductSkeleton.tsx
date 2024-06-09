import React from "react";

const ProductSkeleton = () => {
	return (
		<div className="animate-pulse relative">
			<div
				className="aspect-square lg:aspect-none w-full overflow-hidden 
            rounded-md bg-gray-200 lg:h-80"
			>
				<div className="h-full w-full object-cover object-center" />
			</div>

			<div className="mt-4 flex flex-col gap-2">
				<div className="bg-gray-200 h-4 w-full" />
				<div className="bg-gray-200 h-4 w-full" />
			</div>
		</div>
	);
};

export default ProductSkeleton;
