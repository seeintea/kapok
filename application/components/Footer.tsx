const footer = [
	{
		name: "CC BY-NC-SA 4.0",
		path: "https://creativecommons.org/licenses/by-nc-sa/4.0",
	},
	{ name: "苏ICP备19014503号-2", path: "https://beian.miit.gov.cn" },
];

interface FooterProps {
	username: string;
}

export default function Footer(props: FooterProps) {
	return (
		<footer className="text-sm text-center leading-5">
			<section className="flex justify-center gap-3">
				{footer.map(({ name, path }) => (
					<a key={name} target="_blank" rel="noreferrer" href={path}>
						{name}
					</a>
				))}
			</section>
			<p className="mt-1">
				<span className="mr-1.5">@{new Date().getFullYear()}</span>
				<a href="/">{props.username}</a>
			</p>
		</footer>
	);
}
