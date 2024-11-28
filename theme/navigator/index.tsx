import Link from "next/link";
import config from "@/config";
import ClientNavigator from "./client-navigator";
import styles from "./index.module.scss";

const { navigator } = config.theme;

export default async function Navigator() {
  return (
    <header className={styles.header}>
      <div className={styles.hello}>
        <span>👋</span>
        Hi, it's <Link href="/">yukkuri</Link> here.
      </div>
      <section className={styles.contact}>
        {navigator.contacts.map((contact) => (
          <a
            target="_blank"
            rel="noreferrer"
            key={contact.path}
            href={contact.path}
            title={contact.title}
          >
            {contact.icon}
          </a>
        ))}
      </section>
      <ClientNavigator routes={navigator.routes} />
    </header>
  );
}
