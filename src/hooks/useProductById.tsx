import {useEffect, useState} from "react";
import axios from "axios";

import {Product} from "@/context/AppContext";

export const useProductById = (id: string) => {
	const [productByID, setProductByID] = useState<Product | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchProductById = async () => {
		try {
			setLoading(true);
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_URL}/products/${id}`
			);
			setProductByID(response.data);
		} catch (error) {
			setError("Failed to fetch product");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProductById();
	}, [id]);

	return {productByID, loading, error};
};
