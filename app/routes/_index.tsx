import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Github as GithubIcon,
  Mail as MailIcon,
  Twitter as TwitterIcon,
} from "~/components/icons";
import styles from "~/styles/index.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "yukkuri" },
    { name: "description", content: "Welcome to yukkuri's world!" },
  ];
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Index() {
  return (
    <main className="container">
      <section>
        <h1 className="intro">
          👋 Hi, it&apos;s <span>yukkuri</span> here.
        </h1>
        <section className="about">
          <a href="https://twitter.com/__auki">
            <TwitterIcon />
          </a>
          <a href="https://github.com/seeintea">
            <GithubIcon />
          </a>
          <a href="mailto:leviegu@gmail.com">
            <MailIcon />
          </a>
        </section>
      </section>
    </main>
  );
}
