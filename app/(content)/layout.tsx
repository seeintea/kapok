import type { Metadata } from "next";
import { Navigator, Footer } from "@/components/core";
import "@/scss/globals.scss";

export const metadata: Metadata = {
  title: "yukkuri",
  description: "Welcome to yukkuri's world!",
};

export default async function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={"container-full"}>
          <section className="content">
            <Navigator />
            {children}
            <Footer />
          </section>
        </main>
        <div className={"bg-l"}>
          <div />
        </div>
      </body>
    </html>
  );
}
