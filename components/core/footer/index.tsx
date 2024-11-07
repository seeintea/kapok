export default function Footer() {
  return (
    <footer className="text-sm text-center leading-5">
      <section className="flex justify-center gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://creativecommons.org/licenses/by-nc-sa/4.0"}
        >
          CC BY-NC-SA 4.0
        </a>
        <a target="_blank" rel="noreferrer" href={"https://beian.miit.gov.cn"}>
          苏ICP备19014503号-2
        </a>
      </section>
      <p className="mt-1">
        <span className="mr-1.5">@{new Date().getFullYear()}</span>
        <a href="/">yukkuri</a>
      </p>
    </footer>
  );
}
