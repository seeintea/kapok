import { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import dayjs from "dayjs"
import { getAllArticles, getArticleByFilename } from "@/api/index"
import Bio from "@/components/bio"
import Container from "@/components/container"
import Footer from "@/components/footer"
import Header from "@/components/header"
import MarkdownRender from "@/components/markdown-render"

const Post: NextPage = (props: any) => {
  const router = useRouter()

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
        <title>{props.post.title}</title>
      </Head>
      <Header mini />
      <main className="mb-11">
        <article className="pb-11">
          <h1 className="text-5xl font-extrabold text-primary">
            {props.post.title}
          </h1>
          <small>{dayjs(props.post.date).format("MM/DD, YYYY")}</small>
        </article>
        <MarkdownRender content={props.post.content} />
      </main>
      <Bio />
      <Footer />
    </Container>
  )
}

export async function getStaticProps({ params }: any) {
  const post = getArticleByFilename(params.title, [
    "title",
    "date",
    "content",
    "brief",
  ])

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllArticles(["title"])

  return {
    fallback: false,
    paths: posts.map(post => {
      return {
        params: {
          title: post.title,
        },
      }
    }),
  }
}

export default Post
