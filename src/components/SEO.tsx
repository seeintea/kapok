import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

type metaInfo = {
  name: string
  content: string
}

type SEOProps = {
  description?: string
  meta?: Array<metaInfo>
  lang?: string
  title?: string
}

const SEO: React.FC<SEOProps> = ({
  meta = [],
  lang = "zh",
  title = "",
  description = "",
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              description
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.author.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
