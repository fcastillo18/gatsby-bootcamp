import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About me</h1>
        <h2>Im a sofware developer play around with Gatsby</h2>
        <p>
          <Link to="/contact">Go to contact page</Link>
        </p>
      </Layout>
    </div>
  )
}

export default About
