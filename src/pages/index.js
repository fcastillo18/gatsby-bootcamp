import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello</h1>
        <h2>I'm Franklin, full-stack dev living in the Dominican Republic</h2>
        <p>
          Need a Developer? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
