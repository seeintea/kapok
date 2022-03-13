import ReactMarkdown, { Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

const components = {
  a: (props: any) => {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  },
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
