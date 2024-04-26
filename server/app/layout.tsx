import Component from "@kapok/layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Component></Component>
        {children}
      </body>
    </html>
  );
}
