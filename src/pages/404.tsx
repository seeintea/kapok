import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

type NotFoundProps = {
  location: Location
  data: any
}

const NotFoundPage: React.FC<NotFoundProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "空白"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>
        你只是...
        <br />
        迷失在我的世界里。🍈
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
