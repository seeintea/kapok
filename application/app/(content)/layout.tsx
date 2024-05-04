import type { Metadata } from "next";
import { Introduction, Navigation, Footer } from "@kapok/layout";
import { contacts, footer, routes } from "@/config";
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
        <main className="w-screen h-screen overflow-hidden grid place-items-center">
          <section className="flex flex-col gap-3 text-stone-600">
            <Introduction username="yukkuri" contacts={contacts} />
            <Navigation routes={routes} size={36} />
            {children}
            <Footer username="yukkuri" subLinks={footer} />
          </section>
        </main>
      </body>
    </html>
  );
}
