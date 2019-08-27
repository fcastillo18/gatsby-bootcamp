import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello</h1>
        <h2>I'm Franklin, full-stack dev living in the Dominican Republic</h2>
      </Layout>
    </div>
  )
}

export default IndexPage
