import { BlogFilled, PhotoFilled, NoteFilled } from "@/components/filled-icons";

import ContactMe from "./contact-me";
import NavItem from "./nav-item";
import "./index.css";

export default function Navigator() {
  return (
    <section className="flex flex-col gap-3 text-zinc-900">
      <p className="text-xl font-light tracking-wider text-center text-zinc-900">
        👋 Hi, it's
        <a className="author-name" href="/">
          yukkuri
        </a>
        here.
      </p>

      <ContactMe />

      <nav className="flex justify-center gap-3">
        <NavItem
          name="BLOG"
          path="/blog"
          icon={<BlogFilled width={36} height={36} />}
        />
        <NavItem
          name="PHOTO"
          path="/photo"
          icon={<PhotoFilled width={36} height={36} />}
        />
        <NavItem
          name="NOTE"
          path="/note"
          icon={<NoteFilled width={36} height={36} />}
        />
      </nav>
    </section>
  );
}
