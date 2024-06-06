import { XIcon, GithubIcon, MailIcon } from "@kapok/icons";

const ICON_SIZE = 24;

const contacts = [
	{
		name: "x",
		path: "https://twitter.com/__auki",
		icon: <XIcon width={ICON_SIZE} height={ICON_SIZE} />,
	},
	{
		name: "github",
		path: "https://github.com/seeintea",
		icon: <GithubIcon width={ICON_SIZE} height={ICON_SIZE} />,
	},
	{
		name: "mail",
		path: "mailto:leviegu@gmail.com",
		icon: <MailIcon width={ICON_SIZE} height={ICON_SIZE} />,
	},
];

export default function ContactMe() {
	return (
		<section className="flex items-center justify-center gap-4">
			{contacts.map(({ name, path, icon }) => (
				<a key={name} href={path} title={name}>
					{icon ?? name}
				</a>
			))}
		</section>
	);
}
