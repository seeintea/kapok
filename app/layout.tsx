import CustomFooter from "@/components/custom-footer";
import CustomHeader from "@/components/custom-header";
import "./globals.css";

export const metadata = {
  title: "~/suki",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-cn" className="scroll-smooth">
      <body className="mx-auto max-w-6xl font-serif sm:px-14 md:px-24 lg:px-32">
        <CustomHeader />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
