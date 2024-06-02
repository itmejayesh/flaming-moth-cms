import React from "react";

import ProductDetails from "@/components/ProductDetails";
import ProductImages from "@/components/ProductImages";

export default function Page({params}: {params: {slug: string}}) {
	return (
		<section className="container mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2">
				<div className="block md:sticky self-start top-0">
					<ProductImages />
				</div>
				<ProductDetails />
			</div>
		</section>
	);
}
