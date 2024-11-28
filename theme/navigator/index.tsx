import Link from "next/link";

import { TwitterOutlined, GithubOutlined, MailOutlined } from "./dynamic";
import ClientNavigator from "./client-navigator";
import styles from "./index.module.scss";

export default async function Navigator() {

  return (
    <header className={styles.header}>
      <div className={styles.hello}>
        <span>👋</span>
        Hi, it's <Link href="/">yukkuri</Link> here.
      </div>
      <section className={styles.contact}>
        {contacts.map((contact) => (
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
      <ClientNavigator />
    </header>
  );
}

const contacts = [
  {
    title: "X",
    path: "https://x.com/levie_gu",
    icon: <TwitterOutlined />,
  },
  {
    title: "Github",
    path: "https://github.com/seeintea",
    icon: <GithubOutlined />,
  },
  {
    title: "Mail",
    path: "mailto:leviegu@gmail.com",
    icon: <MailOutlined />,
  },
];
