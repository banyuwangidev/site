import * as React from "react"

import SEO from "../components/seo"
import ArticleList from '../components/ArticleList'
import usePosts from "../utils/usePosts"

const Blog = () => {
  const posts = usePosts()

  return (
    <>
      <SEO title="blogs" />
      <ArticleList posts={posts} />
    </>
  )
}

export default Blog
