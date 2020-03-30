
import React from "react"

import SEO from "@components/seo"
import PostItem from "@components/postItem"

import usePosts from "../utils/usePosts"

const Blog = () => {
  const posts = usePosts()

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