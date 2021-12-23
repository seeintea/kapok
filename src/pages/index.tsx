import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

type IndexProps = {
  location: Location
  data: any
}

const IndexPage: React.FC<IndexProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "空白"
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <Bio />
      {nodes.length == 0 && <p>Hello Word!</p>}
      <ol style={{ listStyle: `none` }}>
        {nodes.map((node: any) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li key={node.fields.slug}>
              <ArticleWrapper itemScope itemType="http://schema.org/Article">
                <ArticleHeader>
                  <ArticleTitle>
                    <Link to={node.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </ArticleTitle>
                  <small>{node.frontmatter.date}</small>
                </ArticleHeader>
                <section>
                  <ArticleDescription
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </ArticleWrapper>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

const ArticleWrapper = styled.article`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
`

const ArticleHeader = styled.header`
  margin-bottom: var(--spacing-4);
`

const ArticleTitle = styled.h2`
  font-size: var(--fontSize-4);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-0);
`

const ArticleDescription = styled.p`
  margin-bottom: var(--spacing-0);
`

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
