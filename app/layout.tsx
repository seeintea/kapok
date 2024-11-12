import type { Metadata } from "next";
import "@/scss/globals.scss";

export const metadata: Metadata = {
  title: "yukkuri",
  description: "Welcome to yukkuri's world!",
};

interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Readonly<BasicLayoutProps>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
