import "github-markdown-css"

export default function MarkdownRender({ content }: { content: string }) {
  return (
    <article style={{ width: 900, margin: "0 auto" }} className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
