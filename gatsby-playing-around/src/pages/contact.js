import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact Page</h1>
        <h2>
          Contact me in Twitter:
          {/* _blanc open a new tab when clicking the link */}
          <a
            href="https://twitter.com/franklincr11"
            target="_blank"
            rel="noopener noreferrer"
          >
            @franklincr11
          </a>
        </h2>
      </Layout>
    </div>
  )
}

export default Contact
