import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <div>
      <Layout>
        <h1>Contact Page</h1>
        <h2>
          Contact me in Twitter:
          {/* _blanc open a new tab when clicking the link */}
          <a href="https://twitter.com/franklincr11" target="_blank">
            @franklincr11
          </a>
        </h2>
      </Layout>
    </div>
  )
}

export default Contact
