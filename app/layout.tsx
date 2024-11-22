import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import config from "@/kapok.config";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {props?.children}
        <div className={"bg-gradient"}>
          <div />
        </div>
      </body>
    </html>
  );
}
