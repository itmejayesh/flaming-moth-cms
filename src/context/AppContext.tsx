"use client";
import {useProductFetching} from "@/hooks/useProductFetching";
import {createContext, ReactNode, useContext, useMemo, useState} from "react";

export interface CartItem {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
	size: string;
}

export interface Product {
	id: string;
	title: string;
	price: number;
	quantity: number;
	stars: number;
	type: string;
	images: string[];
	size: string[];
}

export interface AppContextType {
	products: Product[];
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const CartContextProvider = ({children}: {children: ReactNode}) => {
	const {products} = useProductFetching();
	const [cart, setCart] = useState<CartItem[]>([]);

	// Opration on Cart Items add, remove and clear all
	const addToCart = (item: CartItem) => {
		setCart((prevCart) => {
			const existingItemIndex = prevCart.findIndex(
				(cartItem) => cartItem.id === item.id
			);
			if (existingItemIndex !== -1) {
				// If the item is already in the cart, update its quantity
				const updatedCart = [...prevCart];
				updatedCart[existingItemIndex] = {
					...updatedCart[existingItemIndex],
					quantity: updatedCart[existingItemIndex].quantity + item.quantity,
				};
				return updatedCart;
			} else {
				// If the item is not in the cart, add it
				return [...prevCart, item];
			}
		});
	};

	const removeFromCart = (id: string) => {
		setCart((prevCart) => prevCart?.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	const value = useMemo(
		() => ({products, cart, addToCart, removeFromCart, clearCart}),
		[products, cart]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext must be used within an AppContextProvider");
	}

	return context;
};
