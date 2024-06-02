"use client";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

export interface CartItem {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
	size: string;
}

export interface CartContextType {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({children}: {children: ReactNode}) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	const addToCart = (item: CartItem) => {
		setCart((prevCart) => {
			const existingItem = prevCart?.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prevCart?.map((cartItem) =>
					cartItem.id === item.id
						? {
								...cartItem,
								quantity: cartItem.quantity + item.quantity,
						  }
						: cartItem
				);
			}
			return [...prevCart, item];
		});
	};

	const removeFromCart = (id: string) => {
		setCart((prevCart) => prevCart?.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	const value = useMemo(
		() => ({cart, addToCart, removeFromCart, clearCart}),
		[cart]
	);

	useEffect(() => {
		console.log(cart);
	}, []);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCartContext must be used within a CartContextProvider");
	}

	return context;
};
