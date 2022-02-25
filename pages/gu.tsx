import { NextPage } from "next"
import Bio from "../components/bio"
import Brief from "../components/brief"
import Container from "../components/container"
import Footer from "../components/footer"
import Header from "../components/header"

const Gu: NextPage = () => {
  return (
    <Container>
      <Header />
      <Bio />
      <main>
        <Brief />
      </main>
      <Footer />
    </Container>
  )
}

export default Gu
