import { Fragment, memo } from "react"
import Link from "next/link"
import dayjs from "dayjs"
import { Article } from "@/types/index"

export default memo(function Brief({ articles }: { articles: Article[] }) {
  return (
    <Fragment>
      {articles.map((article: Article) => (
        <article key={article.title}>
          <h3 className="text-2xl font-bold text-primary pt-11">
            <Link href={`/post/${article.link}`}>
              <a className="shadow-none">{article.title}</a>
            </Link>
          </h3>
          <small>{dayjs(article.date).format("YYYY-MM-DD")}</small>
          <p>{article.brief}</p>
        </article>
      ))}
    </Fragment>
  )
})
