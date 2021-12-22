import { graphql } from "gatsby"
import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"

type IndexProps = {
  location: Location
  data: any
}

const IndexPage: React.FC<IndexProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "空白"

  return (
    <Layout location={location} title={siteTitle}>
      <p>Hello Word!</p>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
