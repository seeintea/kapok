import type { PropsWithChildren } from "react";
import styles from "@/styles/note.module.scss"
// import "github-markdown-css/github-markdown-light.css"
import "@/styles/markdown.css"

export default function Layout(props: PropsWithChildren) {
  return <div className={`${styles.article} markdown-body`}>{props.children}</div>;
}
