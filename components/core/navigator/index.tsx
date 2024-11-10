import Link from "next/link";
import { BlogFilled, PhotoFilled, NoteFilled } from "@/components/icons";
import { getCurrentRoute } from "@/utils/header";

import ContactMe from "./contact-me";
import Slogan from "./slogan";
import styles from "./index.module.scss";

export default async function Navigator() {
  const currentRoute = await getCurrentRoute();

  return (
    <section className={styles.navigator}>
      <Slogan />
      <ContactMe />
      <nav className={styles.router}>
        {links.map((item) => {
          const active = currentRoute === item.path ? styles.active : "";
          const klass = `${styles.link} ${active}`;
          return (
            <span key={item.path} className={klass}>
              <Link className={styles.text} href={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </span>
          );
        })}
      </nav>
    </section>
  );
}

const links = [
  {
    title: "BLOG",
    path: "/blog",
    icon: <BlogFilled />,
  },
  {
    title: "PHOTO",
    path: "/photo",
    icon: <PhotoFilled />,
  },
  {
    title: "NOTE",
    path: "/note",
    icon: <NoteFilled />,
  },
];
