import axios, {AxiosResponse} from "axios";

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

export interface Collection {
	id: string;
	image: string;
	title: string;
}

export interface ProductCollection extends Product {
	id: string;
	type: string;
	products: Product[];
}

export const fetchAllProducts = async (): Promise<Product[]> => {
	const url = process.env.NEXT_PUBLIC_URL;
	if (!url) {
		throw new Error("API base URL is not defined");
	}

	try {
		const response: AxiosResponse<Product[]> = await axios.get<Product[]>(
			`${url}/products`
		);
		return response.data;
	} catch (error: any) {
		throw new Error(`Failed to fetch products: ${error.message}`);
	}
};

export const fetchProductById = async (id: string): Promise<Product> => {
	try {
		const response: AxiosResponse<Product> = await axios.get<Product>(
			`${process.env.NEXT_PUBLIC_URL}/products/${id}`
		);
		return response.data;
	} catch (error: any) {
		throw new Error(`Failed to fetch product by id: ${error.message}`);
	}
};

export const fetchCollections = async (): Promise<Collection[]> => {
	try {
		const response: AxiosResponse<Collection[]> = await axios.get<Collection[]>(
			`${process.env.NEXT_PUBLIC_URL}/collections`
		);
		return response.data;
	} catch (error: any) {
		throw new Error(`Failed to fetch collections: ${error.message}`);
	}
};

export const fetchProductCollection = async (): Promise<
	ProductCollection[]
> => {
	try {
		const response: AxiosResponse<ProductCollection[]> = await axios.get<
			ProductCollection[]
		>(`${process.env.NEXT_PUBLIC_URL}/productCollection`);
		return response.data;
	} catch (error: any) {
		throw new Error(`Failed to fetch product collection: ${error.message}`);
	}
};

export const products = async (filter: {sort: string}) => {
	const url = process.env.NEXT_PUBLIC_URL;

	if (!url) {
		throw new Error("API base URL is not defined");
	}
	try {
		const response: AxiosResponse<Product[]> = await axios.post<Product[]>(
			`${url}/products`,
			{filter}
		);
		return response.data;
	} catch (error: any) {
		throw new Error(`Failed to fetch products: ${error.message}`);
	}
};
