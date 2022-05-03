export interface Article {
  link: string
  filename: string
  title: string
  date: string
  brief: string
  content: string
}

export type ArticleFields = keyof Article
