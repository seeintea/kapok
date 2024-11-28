import Link from "next/link";
import config from "@/config";
import styles from "./index.module.scss";

const { footer } = config.theme;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.links}>
        {footer.referLinks.map((link) => (
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
