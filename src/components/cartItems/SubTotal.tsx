import React from "react";
import {Button} from "../ui/button";
import {useAppContext} from "@/context/AppContext";

const SubTotal = () => {
	const {cart} = useAppContext();

	const totalPrice = cart.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return (
		<section className="w-[282px] space-y-4 p-2">
			<div className="flex justify-between text-xs">
				<p className="tracking-widest">SUBTOTAL</p>
				<p>INR {totalPrice.toFixed(2)}</p>
			</div>
			<p className="text-xs text-center">
				Shipping, taxes, and discount codes calculated at checkout.
			</p>
			<Button className="bg-black rounded-none w-full">PROCESS TO CHECKOUT</Button>
		</section>
	);
};

export default React.memo(SubTotal);
