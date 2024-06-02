import {CartItem, useAppContext} from "@/context/AppContext";
import React, {useEffect, useState} from "react";

interface QuantityControlProps {
	quantityItem: number;
	productId: string;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
	quantityItem,
	productId,
}) => {
	const [quantity, setQuantity] = useState<number>(quantityItem);
	const {addToCart, cart} = useAppContext();
	console.log(cart);

	const existingCartItem = cart.find((item) => item.id === productId);

	useEffect(() => {
		if (existingCartItem) {
			setQuantity(existingCartItem.quantity);
		}
	}, [existingCartItem]);

	const incrementQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
		if (existingCartItem) {
			addToCart({
				...existingCartItem,
				quantity: existingCartItem.quantity + 1, // Increment quantity
			});
		}
	};

	const decrementQuantity = () => {
		if (quantity > 1 && existingCartItem) {
			setQuantity((prevQuantity) => prevQuantity - 1);
			addToCart({
				...existingCartItem,
				quantity: existingCartItem.quantity - 1, // Decrement quantity
			});
		}
	};

	return (
		<div className="border w-fit flex gap-2 py-0.5 px-2 shadow">
			<button type="button" onClick={decrementQuantity} className="text-center">
				<span>-</span>
			</button>
			<span>{quantity}</span>
			<button type="button" onClick={incrementQuantity}>
				<span>+</span>
			</button>
		</div>
	);
};

export default QuantityControl;
