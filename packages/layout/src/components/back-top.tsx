"use client"
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpIcon } from "@kapok/icons";

const DISTANCE_TO_VISIBLE = 200;

export default function BackTop(): React.ReactNode {
	const visible = useRef<boolean>(false);
	const [right, setRight] = useState<number>(0);
	const [, forceUpdate] = useState({});

	const handleScrollTo = () => {
		if (!window) return;
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const bindScrollEvent = useCallback((_event: Event) => {
		const current = window.scrollY >= DISTANCE_TO_VISIBLE;
		if (visible.current !== current) {
			visible.current = current;
			forceUpdate({});
		}
	}, []);

	useEffect(() => {
		if (!window) return;
		window.addEventListener("scroll", bindScrollEvent);
		return () => {
			window.removeEventListener("scroll", bindScrollEvent);
		};
	}, [bindScrollEvent]);

	useEffect(() => {
		// console.log(props.container)
		setRight(0)
	}, [])

	const common = "w-8 h-8 bottom-12 fixed border rounded transition-all flex justify-center items-center shadow-sm";
	const klassName = visible.current ? "opacity-100" : "pointer-events-none opacity-0";

	return (
		<button
			type="button"
			className={`${common} ${klassName}`}
			style={{ right }}
			onClick={handleScrollTo}
		>
			<ArrowUpIcon width={20} height={20} />
		</button>
	);
}
