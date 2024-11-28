import loadLocalFont from "next/font/local";
import Link from "next/link";
import styles from "@/styles/note.module.scss";
import { getAppHost } from "@/utils/header";
import type { NoteData } from "@/types/note";

const NotoSerifFont = loadLocalFont({
  src: "../../../public/fonts/OpenSans-VariableFont_wdth,wght.ttf",
});

export default async function Note() {
  const notes = await getPageData();

  return (
    <div className={`${styles.box} ${NotoSerifFont.className}`}>
      {notes.data.map((note) => (
        <article key={note.path} className={styles.details}>
          <header>
            <Link href={`/note/${note.path}`}>{note.title}</Link>
          </header>
          <section>{note.summary}</section>
        </article>
      ))}
    </div>
  );
}

async function getPageData(): Promise<{ data: NoteData[] }> {
  const host = await getAppHost();
  if (!host) return { data: [] };
  const ret = await fetch(`${host}/api/note`, {
    method: "GET",
  });
  return await ret.json();
}
