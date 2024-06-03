import {useEffect, useState} from "react";
import axios from "axios";

interface CollectionItem {
	id: string;
	image: string;
	title: string;
}

export const useCollection = () => {
	const [collection, setCollection] = useState<CollectionItem[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchProductCollection = async () => {
		setLoading(true);
		setError(null); // Reset error state before new request
		try {
			const response = await axios.get<CollectionItem[]>(
				`${process.env.NEXT_PUBLIC_URL}/collections`
			);
			setCollection(response.data);
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

	return {collection, loading, error};
};
