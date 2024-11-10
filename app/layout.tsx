import type { Metadata } from "next";
import { Navigator, Footer } from "@/components/core";
import { getLayoutFull } from "@/utils/header";

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
  const full = await getLayoutFull();

  return (
    <html lang="en">
      <body>
        <main className={`${full ? "container-full" : "container"}`}>
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
