import type React from "react";
import type { LinkItemWithoutComp } from "@/types";

interface FooterProps {
  subLinks: LinkItemWithoutComp[];
  username: string;
}

export default function Footer(props: FooterProps): React.ReactNode {
  return (
    <footer className="text-xs text-center leading-5">
      <section className="flex justify-center gap-3">
        {(props.subLinks || []).map((item) => (
          <a key={item.name} target="_blank" rel="noreferrer" href={item.path}>
            {item.name}
          </a>
        ))}
      </section>
      <p>
        <span className="mr-1.5">@{new Date().getFullYear()}</span>
        <a href="/">{props?.username}</a>
      </p>
    </footer>
  );
}
