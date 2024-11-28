import type { PropsWithChildren } from "react";
import Navigator from "./navigator";
import Footer from "./footer";
import styles from "./index.module.scss";
import CodeBlock from "./code-block";

interface ThemeProviderProps extends PropsWithChildren {
  fullScreen?: boolean;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const klass = props.fullScreen ? styles.container : styles["container-70vh"];
  return (
    <main className={klass}>
      <article className={styles.box}>
        <Navigator />
        <section className={styles.content}>{props.children}</section>
        <Footer />
      </article>
    </main>
  );
}

export { CodeBlock };
