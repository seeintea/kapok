"use client";

import {
  XOutlined,
  MailOutlined,
  GithubOutlined,
} from "@/components/outlined-icons";

export default function ContactMe() {
  const handleCopySelfEMail = () => {
    navigator.clipboard.writeText("levie.gu at gmail dot com");
  };

  return (
    <section className="flex items-center justify-center gap-4">
      <a
        href={"https://x.com/levie_gu"}
        title={"x"}
        target="_blank"
        rel="noreferrer"
      >
        <XOutlined width={24} height={24} />
      </a>
      <span
        className="cursor-pointer"
        title={"google mail"}
        onClick={handleCopySelfEMail}
      >
        <MailOutlined width={24} height={24} />
      </span>
      <a
        href={"https://github.com/seeintea"}
        title={"github"}
        target="_blank"
        rel="noreferrer"
      >
        <GithubOutlined width={24} height={24} />
      </a>
    </section>
  );
}
