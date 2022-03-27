import { Fragment } from "react"
import config from "@/kapok.config"

export default function Footer() {
  return (
    <footer className="mt-20">
      ©️ {new Date().getFullYear()}
      {config.footer.map(item => (
        <Fragment key={item.id}>
          ,&nbsp;&nbsp;
          <a
            href={item.url}
            target={"_blank"}
            rel="noreferrer"
            aria-label={item.label}
          >
            {item.name}
          </a>
        </Fragment>
      ))}
    </footer>
  )
}
