import { NextPage } from "next"
import { getArticleByFilename } from "../api"
import Bio from "../components/bio"
import Container from "../components/container"
import Footer from "../components/footer"
import Header from "../components/header"
import MarkdownRender from "../components/markdown-render"

const Post: NextPage = (props: any) => {
  return (
    <Container>
      <Header />
      <main className="mb-9">
        <MarkdownRender content={props.post.content} />
      </main>
      <Bio />
      <Footer />
    </Container>
  )
}

export async function getStaticProps() {
  const post = getArticleByFilename("hello-word", [
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

export default Post
