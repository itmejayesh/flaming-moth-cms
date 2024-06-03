import Image from "next/image";

import CollectionGrid from "@/components/CollectionGrid";
import InfoSection from "@/components/homePage/InfoSection";
import MainBanner from "@/components/homePage/MainBanner";
import ProductGrid from "@/components/ProductGrid";
import TshirtSection from "@/components/TshirtSection";

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
			<ProductGrid />
			{/* Collections */}
			<CollectionGrid />
			{/*Shirts and Tshirts  Section*/}
			<TshirtSection />
		</main>
	);
}
