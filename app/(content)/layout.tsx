import type { PropsWithChildren } from "react";
import { ThemeProvider } from "@/theme";

export default function Layout(props: PropsWithChildren) {
  return <ThemeProvider fullScreen>{props.children}</ThemeProvider>;
}
