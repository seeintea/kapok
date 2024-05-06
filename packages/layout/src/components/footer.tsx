import type React from "react";
import type { LinkItem } from "@/types";

interface FooterProps {
	username: string;
	link: LinkItem[];
}

export default function Footer(props: FooterProps): React.ReactNode {
	return (
		<footer className="text-xs text-center leading-5">
			<section className="flex justify-center gap-3">
				{(props.link || []).map(({ name, path, icon }) => (
					<a key={name} target="_blank" rel="noreferrer" href={path}>
						{icon ?? name}
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
