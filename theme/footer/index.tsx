import Link from "next/link";
import config from "@/kapok.config";

import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.links}>
        {links.map((link) => (
          <a target="_blank" rel="noreferrer" href={link.path} key={link.path}>
            {link.title}
          </a>
        ))}
      </section>
      <p className={styles.copyright}>
        <span>@{new Date().getFullYear()}</span>
        <Link href="/">{config.title}</Link>
      </p>
    </footer>
  );
}

const links = [
  {
    title: "CC BY-NC-SA 4.0",
    path: "https://creativecommons.org/licenses/by-nc-sa/4.0",
  },
  {
    title: "苏ICP备19014503号-2",
    path: "https://beian.miit.gov.cn",
  },
];
