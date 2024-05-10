import Image from "next/image";

export default function Photos() {
	return (
		<section className="flex justify-center">
			<Image src={"/images/code.png"} alt="build" width={500} height={500} />
		</section>
	);
}
