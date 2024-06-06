import { Welcome } from "@kapok/theme";
import Navigation from "./Navigation";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

interface ContainerProps extends React.PropsWithChildren {
	className?: string;
}

export default function Container(props: ContainerProps) {
	const { className = "", children } = props;

	return (
		<main className={`${className}`}>
			<section className="flex flex-col gap-3 text-zinc-900">
				<Welcome username="yukkuri" />
				<ContactMe />
				<Navigation />
				{children}
				<Footer username="yukkuri" />
			</section>
		</main>
	);
}
