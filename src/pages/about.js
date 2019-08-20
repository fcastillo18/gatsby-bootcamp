import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <h2>Im a sofware developer play around with Gatsby</h2>
      <p>
        <Link to="/contact">Go to contact page</Link>
      </p>
    </div>
  )
}

export default About
