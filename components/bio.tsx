import { Fragment, memo, useMemo } from "react"
import Image from "next/image"
import config from "@/kapok.config"

export default memo(function Bio() {
  const bio = useMemo(() => {
    const { splicing, author, link, slogan } = config.bio
    const split = splicing.split("#author#")
    return { split, author, link, slogan }
  }, [])

  return (
    <Fragment>
      <div className="flex mb-7">
        <div className="w-14 h-14 mr-3 rounded-full overflow-hidden basis-14 shrink-0">
          <Image src="/avatar.jpeg" alt="avatar" width="100%" height="100%" />
        </div>
        <div>
          {bio.split[0]}
          <a href={bio.link} target={"_blank"} rel="noreferrer">
            {bio.author}
          </a>
          {bio.split[1]}
          <br />
          {bio.slogan}
        </div>
      </div>
    </Fragment>
  )
})
