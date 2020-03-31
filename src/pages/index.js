import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/blog/">Go to page 2</Link>
  </>
)

export default IndexPage