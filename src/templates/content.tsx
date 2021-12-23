import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "@emotion/styled"
import Bio from "../components/Bio"

type ContentProps = {
  location: Location
  data: any
}

const ContentTemplate: React.FC<ContentProps> = ({ location, data }) => {
  const node = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `空白`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={node.frontmatter.title}
        description={node.frontmatter.description || node.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <ArticleTitle itemProp="headline">
            {node.frontmatter.title}
          </ArticleTitle>
          <ArticleRelease>{node.frontmatter.date}</ArticleRelease>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: node.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav>
        <ArticlePageWrapper>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ArticlePageWrapper>
      </nav>
    </Layout>
  )
}

const ArticleTitle = styled.h1`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
`

const ArticleRelease = styled.h1`
  font-size: var(--fontSize-2);
  font-family: var(--font-heading);
`
const ArticlePageWrapper = styled.ul`
  margin: var(--spacing-0);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

export default ContentTemplate

export const pageQuery = graphql`
  query ContentBySlug($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
