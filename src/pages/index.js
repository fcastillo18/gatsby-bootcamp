import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Franklin, full-stack dev living in the Dominican Republic</h2>
      <p>
        Need a Developer? <Link to="/contact">Contact me</Link>
      </p>

      <Footer />
    </div>
  )
}

export default IndexPage
