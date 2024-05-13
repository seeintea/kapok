import type React from "react";
import { LocationIcon } from "@kapok/icons";
import type { PhotoItem } from "../types";

interface PhotoProps extends React.PropsWithChildren, PhotoItem {
  className?: string;
}

function PhotoDate(props: Pick<PhotoItem, "date">) {
  if (!props.date) return <></>;
  return (
    <>
      <span className="text-zinc-500 text-xs">•</span>
      <span className="text-zinc-500 text-xs">{props.date}</span>
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

function PhotoFooter(props: Pick<PhotoItem, "location" | "date" | "title">) {
  const { location, title, date } = props;
  if (!location) return <></>;
  return (
    <footer className="flex items-center text-xs gap-0.5">
      <LocationIcon width={14} height={14} />
      {location}
      {!title && <PhotoDate date={date} />}
    </footer>
  );
}

export default function Photo(props: PhotoProps): React.ReactNode {
  const { url, className = "", ...next } = props;

  if (!url) return <></>;

  return (
    <article
      className={`flex flex-col gap-1.5 cursor-default py-5 border-b max-w-[468px] ${className}`}
    >
      <PhotoHeader {...next} />
      <section className="rounded overflow-hidden">
        <img src={url} alt={next.title || ""} />
      </section>
      <PhotoFooter {...next} />
    </article>
  );
}
