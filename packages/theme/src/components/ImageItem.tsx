"use client";
import { useEffect, useState, type CSSProperties } from "react";

interface ImageItemProps {
	width: number;
	aspectRatio: number;
	url: string;
}

export function ImageItem(props: ImageItemProps) {
	const style: CSSProperties = {
		width: props.width,
		height: Number((props.width / props.aspectRatio).toFixed(2)),
	};

	const [isLoad, setIsLoad] = useState<boolean>(true);

	useEffect(() => {
		if (!isLoad || !props.url) return;
		const image = new Image();
		image.src = props.url;
		image.onload = () => {
			setIsLoad(false);
		};
	}, [props.url, isLoad]);

	return (
		<section className="rounded overflow-hidden" style={style}>
			{isLoad ? (
				<div className="bg-slate-100 w-full h-full flex items-center justify-center">
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75" />
						<span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500" />
					</span>
				</div>
			) : (
				<img src={props.url} alt="" />
			)}
		</section>
	);
}
