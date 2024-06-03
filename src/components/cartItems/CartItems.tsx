import Image from "next/image";
import React, {useCallback} from "react";
import QuantityControl from "./QuantityControl";
import {useAppContext} from "@/context/AppContext";
import SubTotal from "./SubTotal";

const addToCart = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
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
		className="w-6 h-6"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
	</svg>
);

const CartItems = () => {
	const {cart, openCart, toggleCart} = useAppContext();

	const handleToggleCart = useCallback(() => {
		toggleCart();
	}, []);

	return (
		<>
			<div onClick={handleToggleCart} className="w-6 h-6 cursor-pointer relative">
				<div className={`relative w-full h-full`}>{addToCart}</div>
				{cart && cart.length >= 1 && (
					<div className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
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

						{/* Fetch data from context Cart */}
						<div className="flex-grow overflow-y-auto p-2">
							{Array.isArray(cart) &&
								cart.map((item) => (
									<div className="flex gap-4 border-b pb-5" key={item.id}>
										<div>
											<Image
												src={item.image}
												width={100}
												height={20}
												alt=""
												className="object-contain w-auto h-auto"
											/>
										</div>
										<div className="space-y-5 text-sm w-full">
											<h2>{item.title}</h2>
											<div>
												<p>
													<strong>Color:</strong> <span>white</span>
												</p>
												<p>
													<strong>Size:</strong>&nbsp;
													<span className="text-xs">{item.size}</span>
												</p>
											</div>
											<div className="flex justify-between">
												<QuantityControl cartItem={item} />
												<p>{`INR ${item.price}`}</p>
											</div>
										</div>
									</div>
								))}
						</div>

						<div>
							{/* Aligns SubTotal to bottom */}
							<SubTotal />
						</div>
					</div>
				</aside>
			</div>
		</>
	);
};

export default CartItems;
