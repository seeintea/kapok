import fs from "fs"
import matter from "gray-matter"
import { join } from "path"
import { Article, ArticleFields } from "@/types"

const defaultArticle: Article = {
  link: "",
  filename: "",
  title: "",
  date: "",
  brief: "",
  content: "",
}

const dir = join(process.cwd(), "_posts")

export const getFilenames = () => fs.readdirSync(dir)

export const getArticleByFilename = (
  filename: string,
  fields: ArticleFields[]
): Article => {
  const name = filename.replace(/\.md$/, "")
  const fullPath = join(dir, `${name}.md`)
  const readContent = fs.readFileSync(fullPath, "utf-8")
  const { data, content } = matter(readContent)
  const ret: Article = { ...defaultArticle }
  fields.forEach(key => {
    if (data[key]) ret[key] = data[key]
  })
  if (!ret.link) ret.link = name
  ret.filename = name
  if (fields.includes("content")) ret.content = content
  return ret
}

export const getAllArticles = (fields: ArticleFields[]): Article[] => {
  const filenames = getFilenames()
  const articles: Article[] = filenames
    .map(f => getArticleByFilename(f, fields))
    .sort((prev: Article, next: Article) => (prev.date > next.date ? -1 : 1))
  return articles
}
