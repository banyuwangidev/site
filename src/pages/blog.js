import * as React from "react"
import loadable from '@loadable/component'
import SEO from "../components/seo"
import usePosts from "../utils/usePosts"

const ArticleList = loadable(() => import('../components/ArticleList'))

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
