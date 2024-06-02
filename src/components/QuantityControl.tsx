import React, {useState} from "react";

interface QuantityControlProps {
	quantityItem: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({quantityItem}) => {
	const [quantity, setQuantity] = useState<number>(quantityItem);

	const incrementQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1);
		}
	};

	return (
		<div className="border w-fit flex gap-2 py-0.5 px-2">
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
