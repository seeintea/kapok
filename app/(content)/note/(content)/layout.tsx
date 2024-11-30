import type { PropsWithChildren } from "react";
import styles from "@/styles/note.module.scss"
import "@/styles/typography.css"

export default function Layout(props: PropsWithChildren) {
  return <div className={`${styles.article} prose`}>{props.children}</div>;
}
