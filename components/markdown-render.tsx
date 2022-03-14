import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import Image from "next/image"
import Link from "next/link"

const components = {
  a: (props: any) => {
    const regex = /^((http|https):)?\/\//
    if (regex.test(props.href)) {
      return (
        <a href={props.href} target="_blank" rel="noreferrer">
          {props.children}
        </a>
      )
    }
    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    )
  },
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props: any) => <Image {...props} layout="responsive" loading="lazy" />,
}

export default function MarkdownRender({ content }: { content: string }) {
  return (
    <article className="prose lg:prose-lg prose-a:text-tag-a prose-a:no-underline">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
