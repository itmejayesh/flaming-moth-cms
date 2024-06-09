export const bannerImages = [
	"/assets/01.jpg",
	"/assets/02.jpg",
	"/assets/03.jpg",
];

export const announcementText = [
	"Flat 10% off on your 1st shopping",
	"Flat 20% off on your 2st shopping",
	"Flat 50% off on your 3st shopping",
	"Flat 80% off on your bulk order",
];

export const sideBarMenuList = [
	"New Arrivals",
	"Best Selling",
	"Track Order",
	"Return & Exchange",
	"Customer Support",
	"Any Query",
];

export const products = [
	{
		id: 1,
		image: "/assets/08.jpg",
		onHoverImage: "/assets/08b.jpg",
		title: "Superflex Black Shirt",
		price: 699,
		size: ["S", "M", "L", "XL", "XXL"],
		stars: 5,
	},
	{
		id: 2,
		image: "/assets/09.jpg",
		onHoverImage: "/assets/09b.jpg",
		title: "Superflex Black Shirt",
		price: 699,
		size: ["S", "M", "L", "XL", "XXL"],
		stars: 5,
	},
	{
		id: 3,
		image: "/assets/10.jpg",
		onHoverImage: "/assets/10b.jpg",
		title: "Superflex Black Shirt",
		price: 699,
		size: ["S", "M", "L", "XL", "XXL"],
		stars: 5,
	},
	{
		id: 4,
		image: "/assets/11.jpg",
		onHoverImage: "/assets/11b.jpg",
		title: "Superflex Black Shirt",
		price: 699,
		size: ["S", "M", "L", "XL", "XXL"],
		stars: 5,
	},
	{
		id: 5,
		image: "/assets/12.jpg",
		onHoverImage: "/assets/12b.jpg",
		title: "Superflex Black Shirt",
		price: 699,
		size: ["S", "M", "L", "XL", "XXL"],
		stars: 5,
	},
	{
		id: 6,
		image: "/assets/13.jpg",
		onHoverImage: "/assets/13b.jpg",
		title: "Superflex Black Shirt",
		price: 699,
		size: ["S", "M", "L", "XL", "XXL"],
		stars: 5,
	},
];

export const collections = [
	{
		id: 1,
		image: "/assets/08.jpg",
		title: "Breezy Linen",
	},
	{
		id: 2,
		image: "/assets/09.jpg",
		title: "Polos",
	},
	{
		id: 3,
		image: "/assets/10.jpg",
		title: "Summer Love",
	},
	{
		id: 4,
		image: "/assets/11.jpg",
		title: "Crochet Shirts",
	},
];

export const productsCollection = [
	// Sample products array
	{
		id: 1,
		type: "Shirt",
		products: [
			{
				image: "/assets/14.jpg",
				onHoverImage: "/assets/14b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
			{
				image: "/assets/14.jpg",
				onHoverImage: "/assets/14b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
			{
				image: "/assets/14.jpg",
				onHoverImage: "/assets/14b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
			{
				image: "/assets/14.jpg",
				onHoverImage: "/assets/14b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
		],
	},
	{
		id: 2,
		type: "T-Shirt",
		products: [
			{
				image: "/assets/11.jpg",
				onHoverImage: "/assets/11b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
			{
				image: "/assets/11.jpg",
				onHoverImage: "/assets/11b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
			{
				image: "/assets/11.jpg",
				onHoverImage: "/assets/11b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
			{
				image: "/assets/11.jpg",
				onHoverImage: "/assets/11b.jpg",
				title: "Superflex Black Shirt",
				price: 699,
				size: ["S", "M", "L", "XL", "XXL"],
			},
		],
	},
];

export const SORT_OPTIONS = [
	{name: "None", value: "none"},
	{name: "Newly Added", value: "uploaded-date"},
	{name: "Best Selling", value: ""},
	{name: "Price (High to Low)", value: "price-dsc"},
	{name: "Price (Low to High)", value: "price-asc"},
] as const;

export const SUBCATEGORIES = [
	{name: "T-Shirt", selected: true},
	{name: "Shirts", selected: false},
	{name: "OverShirt", selected: false},
	{name: "Blazers", selected: false},
	{name: "Chinos", selected: false},
	{name: "Shorts", selected: false},
	{name: "Jackets", selected: false},
	{name: "Jeans", selected: false},
];
