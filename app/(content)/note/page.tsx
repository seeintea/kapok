import loadLocalFont from "next/font/local";
import styles from "@/styles/note.module.scss";
import Link from "next/link";

const NotoSerif = loadLocalFont({
  src: "../../../public/fonts/OpenSans-VariableFont_wdth,wght.ttf",
});

export default function Note() {
  return (
    <section className={styles.list}>
      <article className={`${styles.item} ${NotoSerif.className}`}>
        <header>
          <Link href={"/note/fnm-auto-node-version"}>
            Support fnm automatically change node version
          </Link>
        </header>
        <section>
          Recently I've been using fnm as a node version manager, and when I use
          nvm I can use .nvmrc to switch between node versions automatically,
          but fnm doesn't seem to offer this, so I wrote a shell script to do it
          automatically.
        </section>
      </article>
    </section>
  );
}
