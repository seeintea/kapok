import type { CSSProperties } from "react";
import type { LinkWithIconItem } from "@/types";

interface NavItemProps extends LinkWithIconItem {
	current?: boolean;
}

function NavItem(props: NavItemProps) {
	let wrap = "py-1 px-2";
	let font =
		"underline underline-offset-[5px] decoration-transparent decoration-wavy decoration-1 hover:decoration-zinc-900";

	if (props.current) {
		wrap = `${wrap} shadow bg-white rounded-lg`;
		font = "font-medium";
	}

	return (
		<div className={wrap}>
			<a className="h-full flex justify-center items-center gap-1.5 cursor-pointer" href={props.path}>
				{typeof props.icon !== "undefined" ? props.icon : null}
				<span className={font}>{props.name}</span>
			</a>
		</div>
	);
}

interface NavigationProps {
	space?: number | string;
	current?: string;
	routes?: LinkWithIconItem[];
}

export function Navigation(props: NavigationProps) {
	const style: CSSProperties = {};

	if (typeof props.space !== "undefined") {
		style.gap = props.space;
	}

	if (!props.routes) {
		return <></>;
	}

	return (
		<nav className="flex justify-center gap-3" style={style}>
			{props.routes.map((route) => (
				<NavItem key={route.name} {...route} current={props.current?.indexOf(route.path) === 0} />
			))}
		</nav>
	);
}
