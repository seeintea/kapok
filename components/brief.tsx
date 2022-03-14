import dayjs from "dayjs"
import Link from "next/link"
import { Fragment } from "react"

export default function Brief({ articles }: any) {
  return (
    <Fragment>
      {articles.map((a: any) => {
        const { title } = a
        return (
          <article key={a.title}>
            <h3 className="text-2xl font-bold text-primary pt-11">
              <Link href={`/post/${title}`}>
                <a className="shadow-none">{a.title}</a>
              </Link>
            </h3>
            <small>{dayjs(a.date).format("YYYY-MM-DD")}</small>
            <p>{a.description}</p>
          </article>
        )
      })}
    </Fragment>
  )
}
