import type { ReactNode } from "react";

interface LinkItem {
	name: string;
	path: string;
}

interface LinkWithIconItem extends LinkItem {
	icon?: ReactNode;
}

type PhotoItem = {
	url: string;
	aspectRatio: number;
	title?: string;
	date?: string;
	location?: string;
};

export type { LinkItem, LinkWithIconItem, PhotoItem };
