"use client";
import {useAppContext} from "@/context/AppContext";
import React from "react";
import ProductCards from "./ProductCard";
import {useRouter} from "next/navigation";

const ProductGrid = () => {
	const {products} = useAppContext();
	const router = useRouter();
	return (
		<section className="container mx-auto">
			<div className="flex flex-col items-center gap-4 pb-10">
				<div>
					<h2 className="font-medium text-2xl">Featured Products</h2>
					<p className="text-xs text-gray-500/80 text-center">
						Follow us the most popular trends
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{products?.slice(0, 6).map((product) => (
						<div key={product.id}>
							<ProductCards product={product} />
						</div>
					))}
				</div>
				<button
					type="button"
					onClick={() => router.push(`/collections/new-drops`)}
					className="tracking-widest text-xs font-sans px-6 py-2 border hover:border-black"
				>
					VIEW ALL
				</button>
			</div>
		</section>
	);
};

export default ProductGrid;
