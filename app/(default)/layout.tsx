import type { Metadata } from "next";

import Layout from "@/components/layouts";

export const metadata: Metadata = {
  title: "yukkuri",
  description: "Welcome to yukkuri's world!",
};

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({
  children,
}: Readonly<DefaultLayoutProps>) {
  return <Layout>{children}</Layout>;
}
