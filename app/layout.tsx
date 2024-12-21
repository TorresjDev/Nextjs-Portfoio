import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { assetUrl } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jesus Torres: Portfolio",
	description: "Personal portfolio of Jesus Torres",
	icons: `${assetUrl}/icons/dev/dev-1.svg`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
