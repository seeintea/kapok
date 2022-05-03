import { memo } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import { CustomAnchorElement, CustomImageElement } from "./markdown-custom"

export default memo(function MarkdownRender({ content }: { content: string }) {
  return (
    <article className="prose lg:prose-lg prose-a:text-link prose-a:no-underline dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkUnwrapImages]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          a: CustomAnchorElement,
          img: CustomImageElement,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
})
