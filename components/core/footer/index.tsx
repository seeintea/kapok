import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles["ft-item"]}>
      <section className={styles["ft-links"]}>
        {links.map((item) => (
          <a target="_blank" rel="noreferrer" href={item.path} key={item.path}>
            {item.title}
          </a>
        ))}
      </section>
      <p className={styles["ft-website"]}>
        <span>@{new Date().getFullYear()}</span>
        <a href="/">yukkuri</a>
      </p>
    </footer>
  );
}

const links = [
  {
    title: "CC BY-NC-SA 4.0",
    path: "https://creativecommons.org/licenses/by-nc-sa/4.0",
  },
  {
    title: "苏ICP备19014503号-2",
    path: "https://beian.miit.gov.cn",
  },
];
