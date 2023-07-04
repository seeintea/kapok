import MarkdownWrapper from "@/components/markdown-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarkdownWrapper>{children}</MarkdownWrapper>;
}
