import { VFileCompatible } from "vfile"
import { remark } from "remark"
import html from "remark-html"

export default async function markdownToHtml(markdown: VFileCompatible) {
  const ret = await remark().use(html).process(markdown)
  return ret.toString()
}
