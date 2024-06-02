import {useCartContext} from "@/context/AppContext";
import Image from "next/image";
import React from "react";
import QuantityControl from "./QuantityControl";
import SubTotal from "./SubTotal";

const addToCart = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
		/>
	</svg>
);

const crossIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="size-6"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
	</svg>
);

const CartItems = () => {
	const [openCart, setOpenCart] = React.useState(false);
	const {cart} = useCartContext();

	const handleToggleCart = () => {
		setOpenCart((prev) => !prev);
		console.log("im from cartItem Clicked");
	};

	return (
		<>
			<div onClick={handleToggleCart} className="size-6 cursor-pointer">
				<div className={`relative size-6`}>{addToCart}</div>
				{cart && cart.length >= 1 && (
					<div className="absolute top-14 right-[310px] bg-black text-white size-5 text-center rounded-full">
						{cart.length}
					</div>
				)}
			</div>

			<div
				className={`fixed inset-0 bg-slate-200/60 z-10 transition-opacity 
				duration-300 ease-in-out ${
					openCart ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={handleToggleCart}
			>
				<aside
					className={`fixed top-0 right-0 w-[400px] max-w-xs h-full bg-white
					 text-black shadow-lg transform transition-transform duration-300 ease-in-out ${
							openCart ? "translate-x-0" : "translate-x-full"
						}`}
					onClick={(e) => e.stopPropagation()} // Prevent closing sidebar when clicking inside
				>
					<div className="flex flex-col justify-between items-center p-4 h-full">
						<div className="flex justify-between w-full mb-4 border-b pb-2">
							<div className="flex gap-2">
								<h2 className="text-2xl font-medium">BAG</h2>
							</div>
							<button type="button" onClick={handleToggleCart}>
								{crossIcon}
							</button>
						</div>

						{cart.map((cart) => (
							<div className="flex justify-start items-start w-full gap-2">
								<div>
									<Image
										src={cart.image}
										width={100}
										height={20}
										alt=""
										className="object-contain w-auto h-auto"
									/>
								</div>
								<div className="space-y-5 text-sm w-full h-full">
									<h2>{cart.title}</h2>
									<div>
										<p>
											<strong>Color:</strong> <span>white</span>
										</p>
										<p>
											<strong>Size:</strong>
											{cart.size}
										</p>
									</div>
									<div className="flex justify-between">
										<QuantityControl quantityItem={cart.quantity} />
										<p>{`₹ ${cart.price}`}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</aside>
			</div>
		</>
	);
};

export default CartItems;
