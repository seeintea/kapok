import Image from "next/image";
import Container from "@/components/container";

export default function NotFound() {
	return (
		<Container className="overflow-hidden grid place-items-center h-[70vh]">
			<Image src={"/images/404.png"} alt="404" width={500} height={500} />
		</Container>
	);
}
