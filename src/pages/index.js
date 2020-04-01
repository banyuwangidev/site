import React from "react"

import Link from '../components/Link'
import { StoreCtx } from "../shared/context"
import SEO from "../components/seo"

const IndexPage = () => {
  const { setCrumbPage } = React.useContext(StoreCtx)
  
  React.useEffect(() => {
    setCrumbPage(() => 0);
  },[setCrumbPage]);

  return (
    <>
      <SEO title="Banyuwangi DEV" />
      <h1>Banyuwangi DEV</h1>
      <Link to="/blog" decoration="none">Blog</Link>
    </>
  )
}

export default IndexPage