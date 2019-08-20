import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const About = () => {
  return (
    <div>
      <Header />
      <h1>About me</h1>
      <h2>Im a sofware developer play around with Gatsby</h2>
      <p>
        <Link to="/contact">Go to contact page</Link>
      </p>
      <Footer />
    </div>
  )
}

export default About
