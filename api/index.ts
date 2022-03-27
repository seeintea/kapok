import fs from "fs"
import matter from "gray-matter"
import { join } from "path"
import { Article, ArticleFields } from "@/types"

const defaultArticle: Article = {
  title: "",
  date: "",
  brief: "",
  content: "",
}

const dir = join(process.cwd(), "_posts")

export const getFilenames = () => {
  return fs.readdirSync(dir)
}

export const getArticleByFilename = (
  filename: string,
  fields: ArticleFields[]
): Article => {
  const name = filename.replace(/\.md$/, "")
  const fullPath = join(dir, `${name}.md`)
  const readContent = fs.readFileSync(fullPath, "utf-8")
  const { data, content } = matter(readContent)
  const ret: Article = { ...defaultArticle }
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

export const getAllArticles = (fields: ArticleFields[]): Article[] => {
  const filenames = getFilenames()
  const articles: Article[] = filenames
    .map(f => getArticleByFilename(f, fields))
    .sort((prev: Article, next: Article) => (prev.date > next.date ? -1 : 1))
  return articles
}
