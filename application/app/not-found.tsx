import { Container } from "@/components";
import { ImageItem } from "@kapok/theme";

export default function NotFound() {
	return (
		<Container className="overflow-hidden grid place-items-center h-[70vh]">
			<ImageItem url={"/images/404.png"} width={500} aspectRatio={1.77} />
		</Container>
	);
}
