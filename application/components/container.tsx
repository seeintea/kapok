import { Introduction, Navigation, Footer } from "@kapok/layout";
import { contacts, footer, routes } from "@/config";

interface ContainerProps extends React.PropsWithChildren {
	className?: string;
}

export default function Container(props: ContainerProps) {
	const { className = "", children } = props;

	return (
		<main className={`${className}`}>
			<section className="flex flex-col gap-3 text-stone-600">
				<Introduction username="yukkuri" link={contacts} />
				<Navigation link={routes} />
				{children}
				<Footer username="yukkuri" link={footer} />
			</section>
		</main>
	);
}
