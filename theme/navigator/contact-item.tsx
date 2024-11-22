import { TwitterOutlined, GithubOutlined, MailOutlined } from "./dynamic";
import styles from "./index.module.scss";

export default function ContactItem() {
  return (
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
