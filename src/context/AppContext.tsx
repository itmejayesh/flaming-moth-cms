"use client";
import {useProductFetching} from "@/hooks/useProductFetching";
import {createContext, ReactNode, useContext, useMemo, useState} from "react";

export interface CartItem {
	id: string;
	title: string;
	price: number;
	image: string;
	size: string;
	quantity: number;
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
	removeFromCart: (item: CartItem) => void;
	clearCart: () => void;
	openCart: boolean;
	toggleCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const CartContextProvider = ({children}: {children: ReactNode}) => {
	const {products} = useProductFetching();
	const [cart, setCart] = useState<CartItem[]>([]);
	const [openCart, setOpenCart] = useState<boolean>(false);

	// Opration on Cart Items add, remove and clear all
	const addToCart = (item: CartItem) => {
		const existingItem = cart.find((el) => el.id === item.id);

		if (existingItem) {
			setCart(
				cart.map((el) =>
					el.id === item.id ? {...el, quantity: el.quantity + 1} : el
				)
			);
		} else {
			setCart([...cart, {...item, quantity: 1}]);
		}
	};

	const removeFromCart = (item: CartItem) => {
		const existingItem = cart.find((el) => el.id === item.id);

		if (existingItem) {
			if (existingItem.quantity === 1) {
				setCart(cart.filter((el) => el.id !== item.id));
			} else {
				setCart(
					cart.map((el) =>
						el.id === item.id ? {...el, quantity: el.quantity - 1} : el
					)
				);
			}
		}
	};

	const clearCart = () => {
		setCart([]);
	};

	const toggleCart = () => {
		setOpenCart((prev) => !prev);
	};

	const value = useMemo(
		() => ({
			products,
			cart,
			addToCart,
			removeFromCart,
			clearCart,
			openCart,
			toggleCart,
		}),
		[products, cart, openCart]
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
