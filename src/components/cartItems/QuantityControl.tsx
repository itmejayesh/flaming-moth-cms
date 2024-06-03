import {CartItem, useAppContext} from "@/context/AppContext";
import React from "react";

interface QuantityControlProps {
	cartItem: CartItem;
}

const QuantityControl: React.FC<QuantityControlProps> = ({cartItem}) => {
	const {addToCart, cart, removeFromCart} = useAppContext();

	return (
		<>
			<div className="border flex justify-center items-center shadow h-6">
				<button
					type="button"
					onClick={() => removeFromCart(cartItem)}
					className="hover:bg-black hover:text-white w-6 h-full"
				>
					<span>-</span>
				</button>
				<span className="px-2 w-6 h-full text-center cursor-default">
					{cartItem.quantity}
				</span>
				<button
					type="button"
					onClick={() => addToCart(cartItem)}
					className="hover:bg-black hover:text-white w-6 h-full"
				>
					<span>+</span>
				</button>
			</div>
		</>
	);
};

export default React.memo(QuantityControl);
