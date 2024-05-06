import React from "react";
import type { LinkItem } from "@/types";

interface IntroductionProps {
	username: string;
	link?: LinkItem[];
}

export default function Introduction(props: IntroductionProps): React.ReactNode {
	const { username, link = [] } = props;

	return (
		<React.Fragment>
			<p className="text-lg font-light tracking-wider text-center">
				👋 Hi, it's
				<span
					className="
            mx-0.5 px-1 py-0.5 font-medium text-stone-700 rounded
            transition ease-in-out delay-200
            hover:text-stone-900 hover:bg-slate-100"
				>
					<a href="/">{username}</a>
				</span>
				here.
			</p>
			{link.length > 0 && (
				<section className="flex items-center justify-center gap-4">
					{link.map(({ name, path, icon }) => (
						<a key={name} href={path} title={name}>
							{icon ?? name}
						</a>
					))}
				</section>
			)}
		</React.Fragment>
	);
}
