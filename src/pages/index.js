import React from "react"

import Link from '../components/Link'
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <SEO title="Banyuwangi DEV" />
      <h1>Banyuwangi DEV</h1>
      <Link to="/blog" decoration="none">Blog</Link>
    </>
  )
}

export default IndexPage