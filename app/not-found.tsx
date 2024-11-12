import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layouts";
import assetUrl from "@/public/images/404.png";
import styles from "@/scss/error.module.scss";

export const metadata: Metadata = {
  title: "yukkuri",
  description: "Welcome to yukkuri's world!",
};

export default function NotFound() {
  return (
    <Layout>
      <article className={styles.nf}>
        <Link href="/">
          <Image src={assetUrl} width={400} height={200} alt={"not fount ~"} />
        </Link>
      </article>
    </Layout>
  );
}
