import React, { ReactNode, useMemo } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Bio from "./Bio"
import Footer from "./Footer"

type LayoutProps = {
  children: ReactNode
  location: Location
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, location, title }) => {
  const isRootPath = useMemo(() => {
    const rootPath = `${__PATH_PREFIX__}/`
    return location.pathname === rootPath
  }, [])

  const header = useMemo(() => {
    if (isRootPath) {
      return (
        <MainHeading>
          <Link to="/">{title}</Link>
        </MainHeading>
      )
    } else {
      return <LinkHeading to="/">{title}</LinkHeading>
    }
  }, [isRootPath])

  return (
    <GlobalWrapper>
      <GlobalHeader>{header}</GlobalHeader>
      <Bio />
      <main>{children}</main>
      <Footer />
    </GlobalWrapper>
  )
}

const GlobalWrapper = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5);
`

const GlobalHeader = styled.header`
  margin-bottom: var(--spacing-12);
`

const MainHeading = styled.h1`
  font-size: var(--fontSize-7);
  margin: 0;
`

const LinkHeading = styled(Link)`
  font-weight: var(--fontWeight-bold);
  font-family: var(--font-heading);
  text-decoration: none;
  font-size: var(--fontSize-2);
`

export default Layout
