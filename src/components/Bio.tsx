import React from "react"
import styled from "@emotion/styled"
import profile from "../static/images/profile.jpeg"
import { graphql, useStaticQuery } from "gatsby"

const Bio: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            zhihu
          }
        }
      }
    }
  `)

  const author = site.siteMetadata?.author
  const social = site.siteMetadata?.social

  return (
    <BioBox>
      <ProfileImg src={profile} alt={author?.name || "profile picture"} />
      <Summary>
        Personal blog by{" "}
        <a href={social?.zhihu} target={"_blank"} rel="noreferrer">
          {author?.name || "leviegu"}.
        </a>
        {author?.summary || "我的灿烂人生。"}
      </Summary>
    </BioBox>
  )
}

const BioBox = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);
`

const ProfileImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  margin-right: var(--spacing-4);
  margin-bottom: var(--spacing-0);
`

const Summary = styled.p`
  margin-top: 0;
  max-width: 310px;
`

export default Bio
