import { NextPage } from "next"
import { useRouter } from "next/router"
import { getAllArticles, getArticleByFilename } from "@/api/index"
import Bio from "@/components/bio"
import Container from "@/components/container"
import Footer from "@/components/footer"
import Header from "@/components/header"
import MarkdownRender from "@/components/markdown-render"
import Head from "next/head"

const Post: NextPage = (props: any) => {
  const router = useRouter()
  return (
    <Container>
      <Head>
        {
          // stupid modules css
          // just use it in markdown render `code`
          // eslint-disable-next-line @next/next/no-css-tags
          <link href="/github-dark.css" rel="stylesheet" />
        }
      </Head>
      <Header />
      <main className="mb-11">
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
    "description",
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
