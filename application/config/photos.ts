import type { PhotoItem } from "@kapok/theme";

const cdnPrefix = "https://cdn.jsdelivr.net/gh/seeintea/seeintea.github.io/static/";

function getCDNUrl(url: string) {
	return `${cdnPrefix}${url}`;
}

const photos: PhotoItem[] = [
	{
		url: "vae-2024-06-01.webp",
		title: "",
		date: "2024/06/01",
		location: "南京奥体",
		aspectRatio: 1.77,
	},
	{
		url: "keong-saik-rd-2024-04-22.webp",
		title: "",
		date: "2024/04/22",
		location: "Keong Saik Rd.",
		aspectRatio: 0.74,
	},
	{
		url: "s.e.a.-aquarium-2024-04-21.webp",
		title: "jellyfish 🪼",
		date: "2024/04/21",
		location: "S.E.A. Aquarium",
		aspectRatio: 0.74,
	},
	{
		url: "penang-botanical-garden-2024-01-14.webp",
		title: "monkey🐒",
		date: "2024/01/14",
		location: "Penang Botanical Garden",
		aspectRatio: 0.74,
	},
	{
		url: "penang-hill-2024-01-13.webp",
		title: "",
		date: "2024/01/13",
		location: "Penang Hill",
		aspectRatio: 0.74,
	},
	{
		url: "the-bund-2023-07-21.webp",
		title: "",
		date: "2023/07/21",
		location: "上海外滩",
		aspectRatio: 1.77,
	},
].map((item) => ({ ...item, url: getCDNUrl(item.url) }));

export { photos };
