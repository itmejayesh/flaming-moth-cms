import InfoSection from "@/components/InfoSection";
import MainBanner from "@/components/MainBanner";
import ProductCards from "@/components/ProductCard";
import TshirtSection from "@/components/TshirtSection";
import {collections, products} from "@/constants/constants";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<MainBanner />
			<InfoSection />
			{/* New Posters & Promotion Banners section*/}
			<section className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
					<div className="flex flex-col gap-y-5 overflow-hidden">
						<Image
							src={`/assets/06.jpg`}
							alt=""
							width={600}
							height={100}
							className="w-auto h-auto object-contain"
						/>
						<div className="flex gap-5 h-full">
							<Image
								src={`/assets/05.jpg`}
								alt=""
								width={310}
								height={100}
								className="w-auto sm:w-1/2 h-auto object-contain bg-gray-200/70 mix-blend-multiply"
							/>
							<Image
								src={`/assets/07.jpg`}
								alt=""
								width={310}
								height={100}
								className="w-auto sm:w-1/2 h-auto object-contain bg-gray-100/30 mix-blend-multiply"
							/>
						</div>
					</div>
					<div>
						<Image
							src={`/assets/04.jpg`}
							alt=""
							width={700}
							height={100}
							className="object-contain w-full"
						/>
					</div>
				</div>
			</section>
			{/* Trending Product  Section*/}
			<section className="container mx-auto">
				<div className="flex flex-col items-center gap-4 pb-10">
					<div>
						<h2 className="font-medium text-2xl">Featured Products</h2>
						<p className="text-xs text-gray-500/80 text-center">
							Follow us the most popular trends
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
						{products.map((product) => (
							<div key={product.id}>
								<ProductCards product={product} />
							</div>
						))}
					</div>
					<button
						type="button"
						className="tracking-widest text-xs font-sans px-6 py-2 border hover:border-black"
					>
						VIEW ALL
					</button>
				</div>
			</section>
			{/* Collections */}
			<section className="container mx-auto">
				<div className="flex flex-col items-center gap-4 pb-10">
					<div>
						<h2 className="font-medium text-2xl">Latest Collections</h2>
						<p className="text-xs text-gray-500/80 text-center">
							Follow us the most popular trends
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
						{collections.map((item) => (
							<div key={item.id}>
								<div className="mt-2 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 rounded-xl overflow-hidden">
									<Image
										src={item.image}
										alt=""
										width={180}
										height={180}
										className="w-auto h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-1000 cursor-pointer"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-50 opacity-25 hover:opacity-90 transition-opacity duration-300" />
									<h6 className="absolute w-full text-center bottom-5 left-0 text-white px-2 shadow-2xl font-bold">
										{item.title}
									</h6>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/*Shirts and Tshirts  Section*/}
			<TshirtSection />
		</main>
	);
}
