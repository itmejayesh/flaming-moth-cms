import {useEffect, useState} from "react";
import axios from "axios";

import {Product} from "@/context/AppContext";

interface ProductCollection {
	id: string;
	type: string;
	products: Product[];
}

export const useProductCollection = () => {
	const [productCollection, setProductCollection] = useState<
		ProductCollection[] | null
	>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchProductCollection = async () => {
		setLoading(true);
		setError(null); // Reset error state before new request
		try {
			const response = await axios.get<ProductCollection[]>(
				`${process.env.NEXT_PUBLIC_URL}/productCollection`
			);
			setProductCollection(response.data);
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				// Error is from the server
				setError(`Error: ${err.response.status} - ${err.response.data}`);
			} else {
				// Error is from the client or network
				setError("Failed to fetch product collection.");
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProductCollection();
	}, []);

	return {productCollection, loading, error};
};
