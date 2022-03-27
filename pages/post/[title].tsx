import { useEffect, useState } from "react"
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

  const [insertLink, setInsertLink] = useState(false)

  useEffect(() => {
    const els = document.getElementsByClassName("hljs")
    setInsertLink(els.length > 0)
  }, [])

  return (
    <Container>
      <Head>
        <title>{props.post.title}</title>
        {
          // stupid modules css
          // just use it in markdown render `code`
          // eslint-disable-next-line @next/next/no-css-tags
          insertLink && <link href="/github-dark.css" rel="stylesheet" />
        }
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
