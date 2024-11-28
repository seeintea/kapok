"use client";

import Link from "next/link";

import useNavigator from "@/hooks/useNavigator";

import BlogFilled from "@/public/icons/blog.svg";
import NoteFilled from "@/public/icons/note.svg";
import PhotoFilled from "@/public/icons/photo.svg";

import styles from "./index.module.scss";

export default function ClientNavigator() {
  const pathname = useNavigator();

  return (
    <nav className={styles.routes}>
      {routes.map((route) => {
        const active = pathname === route.path ? styles.active : "";
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
