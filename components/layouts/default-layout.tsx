import { Fragment } from "react";
import { Navigator, Footer } from "@/components/core";
import styles from "./index.module.scss";

interface DefaultLayoutProps {
  full?: boolean;
  children: React.ReactNode;
}

export default async function DefaultLayout({
  full,
  children,
}: Readonly<DefaultLayoutProps>) {
  const klass = full ? styles.full : styles.half;
  return (
    <Fragment>
      <main className={klass}>
        <article className={styles.ctx}>
          <Navigator />
          {children}
          <Footer />
        </article>
      </main>
      <div className={styles.bkg}>
        <div />
      </div>
    </Fragment>
  );
}
