import { BlogIcon, PhotoIcon, NoteIcon } from "@kapok/icons";

const routes = [
	{ path: "/blog", name: "Blog", icon: <BlogIcon width={32} height={32} /> },
	{ path: "/photos", name: "Photos", icon: <PhotoIcon width={32} height={32} /> },
	{ path: "/notes", name: "Notes", icon: <NoteIcon width={32} height={32} /> },
];

export { routes };
