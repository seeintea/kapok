import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Navigator, Footer } from "@/components/core";

import "./globals.css";

export const metadata: Metadata = {
  title: "yukkuri",
  description: "Welcome to yukkuri's world!",
};

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <main className={"overflow-hidden grid place-items-center h-[70vh]"}>
            <section className="flex flex-col gap-3 text-zinc-900">
              <Navigator />
              {children}
              <Footer />
            </section>
          </main>
          <div className="background-layer-0">
            <div className="background-layer-1" />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
