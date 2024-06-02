import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {CartContextProvider} from "@/context/AppContext";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Flaming Moth",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CartContextProvider>
					<NavBar />
					{children}
					<Footer />
				</CartContextProvider>
			</body>
		</html>
	);
}
