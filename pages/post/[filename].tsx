import { useEffect } from "react"
import { NextPage } from "next"
import Head from "next/head"
import dayjs from "dayjs"
import { getAllArticles, getArticleByFilename } from "@/api/index"
import Bio from "@/components/bio"
import Container from "@/components/container"
import Footer from "@/components/footer"
import Header from "@/components/header"
import MarkdownRender from "@/components/markdown-render"

interface postProps {
  title: string
  date: string
  content: string
  prev: string
  next: string
}

const Post: NextPage<postProps> = ({ title, date, content, prev, next }) => {
  console.log(prev, next)

  useEffect(() => {
    const els = document.getElementsByClassName("hljs")
    if (els.length <= 0) return
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "/github-dark.css"
    const head = document.getElementsByTagName("head")
    if (head.length) {
      head[0].append(link)
    }
  }, [])

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Header size="small" />
      <main className="mb-11">
        <article className="pb-11">
          <h1 className="text-5xl font-extrabold text-primary leading-tight">
            {title}
          </h1>
          <div className="mt-5">{dayjs(date).format("MM/DD, YYYY")}</div>
        </article>
        <MarkdownRender content={content} />
      </main>
      <Bio />
      <Footer />
    </Container>
  )
}

export async function getStaticProps({
  params,
}: {
  params: { filename: string }
}) {
  const { filename } = params
  const post = getArticleByFilename(filename, ["title", "date", "content"])
  const { title, date, content } = post
  return {
    props: {
      title,
      date,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllArticles(["filename"])
  return {
    fallback: false,
    paths: posts.map(post => ({ params: { filename: post.filename } })),
  }
}

export default Post
