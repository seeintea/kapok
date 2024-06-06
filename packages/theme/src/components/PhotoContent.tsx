import type { ReactNode } from "react";
import type { PhotoItem } from "../types";
import { ImageItem } from "./ImageItem";

function PhotoDate(props: Pick<PhotoItem, "date">) {
	if (!props.date) return <></>;
	return (
		<>
			<span className="text-zinc-500 text-xs">•</span>
			<span className="text-zinc-500 text-sm">{props.date}</span>
		</>
	);
}

function PhotoHeader(props: Pick<PhotoItem, "title" | "date">) {
	const { title, date } = props;
	if (!title) return <></>;
	return (
		<header className="flex gap-1 items-center">
			<span className="text-gray-800 break-all">{title}</span>
			<PhotoDate date={date} />
		</header>
	);
}

function PhotoFooter(props: Pick<PhotoItem, "location" | "date" | "title"> & { icon?: ReactNode }) {
	const { location, title, date, icon } = props;
	if (!location) return <></>;
	return (
		<footer className="flex items-center text-sm gap-0.5">
			{typeof icon === "undefined" ? <></> : icon}
			{location}
			{typeof title === "undefined" ? <></> : <PhotoDate date={date} />}
		</footer>
	);
}

interface PhotoContentProps extends PhotoItem {
	width: number;
	className?: string;
	icon?: ReactNode;
}

export function PhotoContent(props: PhotoContentProps) {
	const { url, width, aspectRatio, className, ...next } = props;

	let klassName = "flex flex-col gap-1.5 cursor-default py-3 border-b max-w-[600px]";
	if (className) {
		klassName = `${klassName} ${className}`;
	}

	if (!url) return <></>;
	return (
		<article className={klassName}>
			<PhotoHeader {...next} />
			<ImageItem width={width} aspectRatio={aspectRatio} url={url} />
			<PhotoFooter {...next} />
		</article>
	);
}
