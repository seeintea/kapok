import type { PropsWithChildren } from "react";
import styles from "@/styles/note.module.scss";

export default function NoteLayout(props: PropsWithChildren) {
  return <div className={styles.warp}>{props.children}</div>;
}
