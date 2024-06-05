import type { PhotoItem } from "@kapok/layout";

const cdnPrefix = 'https://cdn.jsdelivr.net/gh/seeintea/seeintea.github.io/static/'

function getCDNUrl(url: string) {
  return `${cdnPrefix}${url}`
}

const photos: PhotoItem[] = [
  {
    url: "vae-2024-06-01.webp",
    title: "",
    date: "2024/06/01",
    location: "南京奥体",
  },
  {
    url: "keong-saik-rd-2024-04-22.webp",
    title: "",
    date: "2024/04/22",
    location: "Keong Saik Rd.",
  },
  {
    url: "s.e.a.-aquarium-2024-04-21.webp",
    title: "jellyfish 🪼",
    date: "2024/04/21",
    location: "S.E.A. Aquarium",
  },
  {
    url: "penang-botanical-garden-2024-01-14.webp",
    title: "monkey🐒",
    date: "2024/01/14",
    location: "Penang Botanical Garden",
  },
  {
    url: "penang-hill-2024-01-13.webp",
    title: "jellyfish 🪼",
    date: "2024/01/13",
    location: "Penang Hill",
  },
  {
    url: "the-bund-2023-07-21.webp",
    title: "",
    date: "2023/07/21",
    location: "上海外滩",
  },
].map((item) => ({...item, url: getCDNUrl(item.url)}));

export { photos };
