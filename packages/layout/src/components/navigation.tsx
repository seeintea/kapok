import type React from "react";
import type { LinkItem } from "@/types";

interface NavigationProps {
	link: LinkItem[];
}

export default function Navigation(props: NavigationProps): React.ReactNode {
	const { link = [] } = props;

	return (
		<nav className="flex justify-center gap-5">
			{link.map(({ name, path, icon }) => {
				return (
					<span key={name} className="relative pointer group">
						<div className="bg-mask opacity-0 w-full h-full absolute blur group-hover:opacity-15" />
						<a className="relative" title={name} href={path}>{icon ?? name}</a>
					</span>
				);
			})}
		</nav>
	);
}
