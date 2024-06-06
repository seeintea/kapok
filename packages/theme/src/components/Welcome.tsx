interface WelcomeProps {
	username: string;
	className?: string;
}

export function Welcome(props: WelcomeProps) {
	let klassName = "text-xl font-light tracking-wider text-center text-zinc-900";

	if (props.className) {
		klassName = `${klassName} ${props.className}`;
	}

	return (
		<p className={klassName}>
			👋 Hi, it's
			<a
				className="mx-1.5 font-semibold underline underline-offset-[5px] decoration-transparent decoration-wavy decoration-1 hover:decoration-zinc-900 transition ease-in-out"
				href="/"
			>
				{props.username}
			</a>
			here.
		</p>
	);
}
