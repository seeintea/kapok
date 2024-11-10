"use client";

import { XOutlined, MailOutlined, GithubOutlined } from "@/components/icons";

import styles from "./index.module.scss";

export default function ContactMe() {
  const handleCopySelfEMail = () => {
    navigator.clipboard.writeText("levie.gu at gmail dot com");
  };

  return (
    <section className={styles.contact}>
      {links.map((item) => (
        <a
          target="_blank"
          rel="noreferrer"
          key={item.path}
          href={item.path}
          title={item.title}
        >
          {item.icon}
        </a>
      ))}
      <span title={"google mail"} onClick={handleCopySelfEMail}>
        <MailOutlined />
      </span>
    </section>
  );
}

const links = [
  {
    title: "X",
    path: "https://x.com/levie_gu",
    icon: <XOutlined />,
  },
  {
    title: "github",
    path: "https://github.com/seeintea",
    icon: <GithubOutlined />,
  },
];
