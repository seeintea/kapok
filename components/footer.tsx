import { Fragment } from "react"
import conf from "@/kapok.config"

export default function Footer() {
  const { record, contact } = conf.footer

  return (
    <footer className="mt-20">
      ©️ {new Date().getFullYear()},&nbsp;&nbsp;
      {contact.map(i => (
        <Fragment key={i.id}>
          <a href={i.url} target={"_blank"} rel="noreferrer">
            {i.name}
          </a>
          ,&nbsp;&nbsp;
        </Fragment>
      ))}
      <a href="https://beian.miit.gov.cn" target={"_blank"} rel="noreferrer">
        {record}
      </a>
    </footer>
  )
}
