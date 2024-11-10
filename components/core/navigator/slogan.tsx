import styles from "./index.module.scss";

export default function Slogan() {
  return (
    <p className={styles.slogan}>
      👋 Hi, it's
      <a href="/">yukkuri</a>
      here.
    </p>
  );
}
