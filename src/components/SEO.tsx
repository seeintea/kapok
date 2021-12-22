import React from "react"
import { Helmet } from "react-helmet"

type SEOProps = {
  title: string
  description: string
  meta: Array<string>
  image: string
  slug: string
}

const SEO: React.FC<SEOProps> = () => {
  return <Helmet />
}

export default SEO
