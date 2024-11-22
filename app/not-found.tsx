import Image from "next/image";
import Link from "next/link";

import { ThemeProvider } from "@/theme";
import notFound from "@/public/images/not-found.png";
import styles from "@/styles/error.module.scss";

export default function NotFound() {
  return (
    <ThemeProvider>
      <section className={styles.nf}>
        <Link href="/">
          <Image src={notFound} width={400} height={200} alt={"page not found"} />
        </Link>
      </section>
    </ThemeProvider>
  );
}
