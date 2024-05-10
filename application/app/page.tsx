import Container from "@/components/container";

async function getVerse() {
	const res = await fetch("https://v2.jinrishici.com/one.json", {
		headers: {
			"X-User-Token": "9nIB8ArxWKbC9NXTCX7nxhNTJPMe3Rai",
		},
	});
	if (!res.ok) {
		return {};
	}
	return res.json();
}

export default async function Index() {
	const verse = await getVerse();

	return (
		<Container className="overflow-hidden grid place-items-center h-[70vh]">
			{verse?.data?.content && <p className="my-1	text-sm text-center">{verse?.data?.content}</p>}
		</Container>
	);
}
