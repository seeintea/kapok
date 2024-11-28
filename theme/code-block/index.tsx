import { codeToHtml } from "shiki";
import styles from "./index.module.scss";

interface CodeBlockProps {
  code: string;
  lang: string;
  theme?: string;
}

export default async function CodeBlock(props: CodeBlockProps) {
  const { code, lang, theme = "one-dark-pro" } = props;
  const html = await codeToHtml(code, { lang, theme });
  return (
    <div className={styles["code-block"]}>
      <div className={styles["code-language"]}>{lang}</div>
      <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
