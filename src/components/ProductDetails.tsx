"use client";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {RiDiscountPercentLine} from "react-icons/ri";
import {CiHeart} from "react-icons/ci";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {useCartContext} from "@/context/AppContext";

const Star = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="size-3"
	>
		<path
			fillRule="evenodd"
			d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
			clipRule="evenodd"
		/>
	</svg>
);

const ProductDetails = () => {
	const [selectedSize, setSelectedSize] = useState(null);
	const {addToCart, cart} = useCartContext();

	const handleSizeClick = (size: any) => {
		setSelectedSize(size);
	};

	const handleAddToBag = () => {
		addToCart({
			id: "1",
			image: "/assets/11.jpg",
			title: "Superflex Black Shirt",
			price: 699,
			size: "S",
			quantity: 1,
		});
	};

	const isAddToBagDisabled = !selectedSize;

	return (
		<div className="py-6 md:py-12 ml-0 md:ml-12 overflow-y-auto">
			<div className="grid">
				<h5 className="text-2xl pb-2">QUADS LINE GREY SHIRT</h5>
				<div className="flex gap-1">
					{Array.from({length: 5}).map((_, index) => (
						<div key={index}>{Star}</div>
					))}
				</div>
				<p className="tracking-wider mt-5">
					INR 999 <br />
					<span className="text-xs">(incl. of all taxes)</span>
				</p>

				<div className="border-b pb-6">
					<div className="flex mt-5 gap-2">
						<RiDiscountPercentLine />
						<p className="text-xs">
							Get this for INR 899 <br />
							Buy 2 & Get Flat 10% Off! Code: BUY2
						</p>
					</div>
					<div className="flex mt-5 gap-2">
						<RiDiscountPercentLine />
						<p className="text-xs">
							Get this for INR 899 <br />
							Buy 2 & Get Flat 10% Off! Code: BUY2
						</p>
					</div>
					<div className="flex mt-5 gap-2">
						<RiDiscountPercentLine />
						<p className="text-xs">
							Get this for INR 899 <br />
							Buy 2 & Get Flat 10% Off! Code: BUY2
						</p>
					</div>
					<div className="flex mt-5 gap-2">
						<RiDiscountPercentLine />
						<p className="text-xs">
							Get this for INR 899 <br />
							Buy 2 & Get Flat 10% Off! Code: BUY2
						</p>
					</div>
				</div>

				<h6 className="mt-5">Select A Size</h6>
				<div className="flex gap-5">
					{["S", "L", "XL"].map((size) => (
						<p
							key={size}
							onClick={() => handleSizeClick(size)}
							className={`flex mt-3 cursor-pointer shadow-md border text-gray-500 text-sm hover:bg-black hover:text-white size-10 items-center justify-center rounded-md ${
								selectedSize === size ? "bg-black text-white" : ""
							}`}
						>
							{size}
						</p>
					))}
				</div>

				<div className="flex-col flex gap-5 my-5">
					<Button
						onClick={handleAddToBag}
						disabled={isAddToBagDisabled}
						className="active:scale-95 transition-transformc"
					>
						ADD TO BAG
					</Button>
					<Button variant="outline">
						<CiHeart size={20} /> &nbsp; Add to Wishlist
					</Button>
				</div>

				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>EMI / PAY IN 3 OFFERS</AccordionTrigger>
						<AccordionContent>
							<div className="text-xs">
								or Pay ₹333 and rest later via No Charges | upto Rs.200 discount or 3
								monthly payments of ₹333 FLAT Cashback ₹250 Or 3 interest free payments
								of ₹333 SVG Image
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>DESCRIPTION</AccordionTrigger>
						<AccordionContent>
							<div className="text-xs">
								Introducing the Quads Line Grey Shirt, a stylish half-sleeve shirt with
								a Cuban collar and straight hem. This shirt features a self-design,
								perfect for any occasion. Crafted from the highest quality fabric for a
								comfortable fit, it's a timeless essential for your wardrobe.
								<br />
								<br />
								<strong>PRODUCT SPECIFICATION</strong> <br />
								<br />
								<ul className="list-disc">
									<li>Half Sleeves</li>
									<li>Cuban Collar</li>
									<li>Straight Hem</li>
								</ul>
								<br />
								<strong>FABRIC:</strong>
								100% Cotton Polyester Blend
								<br />
								<strong>FIT:</strong> Slim fit <br />
								<br />
								<strong>SIZE:</strong> Model is wearing a size M Model <br />
								<br />
								For more details see the wash care label attached ACTUAL COLOUR OF THE
								PRODUCT MAY VARY SLIGHTLY FROM THE IMAGE SKU: 4MSS2598-03-S
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>MORE INFORMATION</AccordionTrigger>
						<AccordionContent>
							<div className="text-xs">
								<strong>Manufactured & Marketed by:</strong> <br />
								<br />
								<strong>Flaming Moth Pvt. Ltd.</strong> <br />
								No. 1/1, St. Delhi - 110056 <br />
								<br />
								<strong>Country of Origin:</strong> India
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>RETURN & EXCHANGE</AccordionTrigger>
						<AccordionContent>
							<ul className="space-y-4 list-decimal text-xs">
								<li>
									Hassle-free returns within 7 days; specific conditions apply based on
									products and promotions.
								</li>
								<li>
									Prepaid order refunds are processed to the original payment method; COD
									orders receive a coupon code refund.
								</li>
								<li>
									Issues with defective, incorrect, or damaged products must be reported
									within 24 hours of delivery.
								</li>
								<li>
									Items purchased during special sales with free product offers, like
									BOGO, are ineligible for returns.
								</li>
								<li>
									A reverse shipment fee of Rs 100 is charged, which will be deducted
									from the refund.
								</li>
								<li>
									For hygiene, items such as accessories, sunglasses, perfumes, masks,
									and innerwear are non-returnable.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default ProductDetails;
