import {useEffect, useState} from "react";
import axios from "axios";

import {Product} from "@/context/AppContext";

export const useProductFetching = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const fetchProducts = async () => {
		try {
			const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/products`);
			setProducts(response.data);
			setLoading(false);
		} catch (error) {
			setError("Failed to fetch products");
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return {products, loading, error};
};
