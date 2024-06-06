import type { Metadata } from "next";
import { Container } from "@/components";
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
				<Container className="w-1/2 min-w-[680px] mx-auto py-9 min-h-screen">{children}</Container>
			</body>
		</html>
	);
}
