
import * as React from "react"

import { StoreCtx } from '../shared/context'
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import usePosts from "../utils/usePosts"

const Blog = () => {
  const posts = usePosts()
  const { setCrumbPage } = React.useContext(StoreCtx)

  React.useEffect(() => {
    setCrumbPage(() => "Blog");
  },[setCrumbPage]);

  return (
    <>
      <SEO title="blogs" />
      <h1>Blog posts</h1>
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </>
  )
}

export default Blog