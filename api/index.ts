import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const dir = join(process.cwd(), "_posts")

interface Article {
  [key: string]: string
}

export const getFilenames = () => {
  return fs.readdirSync(dir)
}

export const getArticleByFilename = (
  filename: string,
  fields: string[]
): Article => {
  const name = filename.replace(/\.md$/, "")
  const fullPath = join(dir, `${name}.md`)
  const readContent = fs.readFileSync(fullPath, "utf-8")
  const { data, content } = matter(readContent)
  const ret: Article = {}
  fields.forEach(f => {
    if (typeof data[f] !== "undefined") {
      ret[f] = data[f]
    }
  })
  ret.title = name
  if (fields.includes("content")) {
    ret.content = content
  }
  return ret
}

export const getAllArticles = (fields: string[]): Article[] => {
  const filenames = getFilenames()
  const articles: Array<Record<string, string>> = filenames
    .map(f => getArticleByFilename(f, fields))
    .sort((p1: Article, p2: Article) => (p1.date > p2.date ? -1 : 1))
  return articles
}
