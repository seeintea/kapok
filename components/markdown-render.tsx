import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import { CustomTagA, CustomTagImage } from "./markdown-custom"

export default function MarkdownRender({ content }: { content: string }) {
  return (
    <article className="prose lg:prose-lg prose-a:text-tag-a prose-a:no-underline dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkUnwrapImages]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          a: CustomTagA,
          img: CustomTagImage,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
