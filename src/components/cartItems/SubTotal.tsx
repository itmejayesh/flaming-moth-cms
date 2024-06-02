import React from "react";
import {Button} from "../ui/button";

const SubTotal = () => {
	return (
		<section className="w-[282px] space-y-4 p-2">
			<div className="flex justify-between text-xs">
				<p className="tracking-widest">SUBTOTAL</p>
				<p>INR 7,596</p>
			</div>
			<p className="text-xs text-center">
				Shipping, taxes, and discount codes calculated at checkout.
			</p>
			<Button className="bg-black rounded-none w-full">PROCESS TO CHECKOUT</Button>
		</section>
	);
};

export default SubTotal;
