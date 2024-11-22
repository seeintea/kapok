import BlogFilled from "@/public/icons/blog.svg";
import NoteFilled from "@/public/icons/note.svg";
import PhotoFilled from "@/public/icons/photo.svg";
import { getCurrentRoute } from "@/utils/header";

import HolaItem from "./hola-item";
import ContactItem from "./contact-item";
import styles from "./index.module.scss"
import Link from "next/link";

export default async function Navigator() {
  const current = await getCurrentRoute()

  return (
    <header className={styles.header}>
      <HolaItem />
      <ContactItem />
      <nav className={styles.routes}>
        {routes.map((route) => {
          const active = current === route.path ? styles.active : "";
          const klass = `${styles.route} ${active}`;
          return (
            <span key={route.path} className={klass}>
              <Link className={styles.text} href={route.path}>
                {route.icon}
                <span>{route.title}</span>
              </Link>
            </span>
          );
        })}
      </nav>
    </header>
  );
}

const routes = [
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
