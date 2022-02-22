import "github-markdown-css"

export default function HtmlRender({ content }: { content: string }) {
  return (
    <div style={{ width: 900, margin: "0 auto" }} className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
