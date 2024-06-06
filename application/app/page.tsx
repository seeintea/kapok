import { Container } from "@/components";

async function getVerse(config: { static?: boolean } = {}) {
	const verse = "云去山如画。";
	if (config.static) return verse;
	const res = await fetch("https://v2.jinrishici.com/one.json", {
		headers: {
			"X-User-Token": process.env.X_USER_TOKEN,
		},
	});
	if (!res.ok) return verse;
	const json = await res.json();
	if (json?.data?.content) return json?.data?.content as string;
	return verse;
}

export default async function Index() {
	const verse = await getVerse({ static: process.env.NODE_ENV !== "production" });

	return (
		<Container className="overflow-hidden grid place-items-center h-[70vh]">
			<p className="my-1 text-center">{verse}</p>
		</Container>
	);
}
