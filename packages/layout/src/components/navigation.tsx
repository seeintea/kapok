import type React from "react";
import type { LinkItem } from "@/types";
import Popover from "./popover";

interface NavigationProps {
  size?: number;
  routes: LinkItem[];
}

export default function Navigation(props: NavigationProps): React.ReactNode {
  const { size = 24, routes = [] } = props;

  return (
    // <nav className="flex justify-center gap-5 border border-slate-200 py-1 px-5 rounded-full shadow-inner">
    <nav className="flex justify-center gap-5">
      {routes.map(({ name, path, component: Component }) => {
        return (
          <a key={name} href={path}>
            <Popover title={name}>
              <Component width={size} height={size} />
            </Popover>
          </a>
        );
      })}
    </nav>
  );
}
