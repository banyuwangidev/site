import * as React from "react"

import SEO from "../components/seo"
import Article from "../components/Article"
import usePosts from "../utils/usePosts"

const Blog = () => {
  const posts = usePosts()

  return (
    <>
      <SEO title="blogs" />
      <h1>Blog posts</h1>
      {posts.map((post) => (
        <Article key={post.slug} post={post} />
      ))}
    </>
  )
}

export default Blog
