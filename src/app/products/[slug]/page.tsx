import React from "react";

import ProductDetails from "@/components/productPage/ProductDetails";
import ProductImages from "@/components/productPage/ProductImages";

interface PageProps {
	params: {
		slug: string;
	};
}

export default function Page({params}: PageProps) {
	//Men's%20Polo%20T-shirt-2
	const id = params.slug.split("-").pop() || "";

	return (
		<section className="container mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-2">
				<div className="block md:sticky self-start top-0">
					<ProductImages id={id} />
				</div>
				<ProductDetails id={id} />
			</div>
		</section>
	);
}
