"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import {bannerImages} from "@/constants/constants";
import Autoplay from "embla-carousel-autoplay";
import {useRef} from "react";

function MainBanner() {
	const autoplayInstance = useRef(Autoplay());
	return (
		<Carousel opts={{loop: true}} plugins={[autoplayInstance.current]}>
			<CarouselContent>
				{bannerImages.map((img, index) => (
					<CarouselItem key={index}>
						<div>
							<Image
								src={img}
								alt=""
								width={1920} // Adjust width as per your high-resolution image
								height={1080} // Adjust height as per your high-resolution image
								quality={100} // Increase quality to 100
								className="object-cover h-1/2 xl:h-screen w-screen"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}

export default MainBanner;
