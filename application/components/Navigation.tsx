"use client";

import { Navigation as KapokNavigation } from "@kapok/theme";
import { BlogIcon, PhotoIcon, NoteIcon } from "@kapok/icons";
import { usePathname } from "next/navigation";

const ICON_SIZE = 28;

const routes = [
	{ path: "/blog", name: "BLOG", icon: <BlogIcon width={ICON_SIZE} height={ICON_SIZE} /> },
	{ path: "/photos", name: "PHOTO", icon: <PhotoIcon width={ICON_SIZE} height={ICON_SIZE} /> },
	{ path: "/notes", name: "NOTE", icon: <NoteIcon width={ICON_SIZE} height={ICON_SIZE} /> },
];

export default function Navigation() {
	const pathname = usePathname();
	return <KapokNavigation routes={routes} current={pathname} />;
}
