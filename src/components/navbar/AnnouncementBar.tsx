"use client";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {announcementText} from "@/constants/constant";
import Autoplay from "embla-carousel-autoplay";
import {useRef} from "react";

const AnnouncementBar = () => {
	const autoplayInstance = useRef(Autoplay({delay: 2000}));
	return (
		<Carousel
			className=""
			opts={{loop: true}}
			plugins={[autoplayInstance.current]}
		>
			<CarouselContent>
				{announcementText.map((text, index) => (
					<CarouselItem key={index}>
						<div>
							<h4 className="text-white flex justify-center">{text}</h4>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default AnnouncementBar;
