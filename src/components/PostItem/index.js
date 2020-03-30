import React from "react"

const PostItem = ({ post }) => {
  const { name, github } = post.contributors.find(
    ({ github }) => github === post.author
  )

  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <p>{name} on {post.date}</p>
    </article>
  )
}

export default PostItem