"use client";

import Link from "next/link";
import { useRoutePathname } from "@/hooks";
import styles from "./index.module.scss";

interface ClientNavigatorProps {
  routes: { title: string; path: string; icon?: JSX.Element }[];
}

export default function ClientNavigator(props: ClientNavigatorProps) {
  const pathname = useRoutePathname();

  return (
    <nav className={styles.routes}>
      {props.routes.map((route) => {
        const active = pathname === route.path ? styles.active : styles.inactive;
        const klass = `${styles.route} ${active}`;
        return (
          <Link href={route.path} key={route.path} className={klass}>
            {route.icon}
            <span>{route.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
