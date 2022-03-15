import { Fragment } from "react"
import Image from "next/image"
import conf from "@/kapok.config"

export default function Bio() {
  const { author, link, description } = conf.bio

  return (
    <Fragment>
      <div className="flex mb-7">
        <div className="w-14 h-14 mr-3 rounded-full overflow-hidden basis-14 shrink-0">
          <Image src="/avatar.jpeg" alt="avatar" width="100%" height="100%" />
        </div>
        <div>
          Personal blog by &nbsp;
          <a href={link} target={"_blank"} rel="noreferrer">
            {author}.
          </a>
          <br />
          {description}
        </div>
      </div>
    </Fragment>
  )
}
