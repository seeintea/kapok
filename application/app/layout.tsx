import type { Metadata } from "next";
import { BGMask } from "@kapok/theme";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "yukkuri",
	description: "Welcome to yukkuri's world!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<BGMask />
				{children}
			</body>
		</html>
	);
}
