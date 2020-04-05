import React from "react"
import Link from "../Link"

const Article = ({ post }) => {
  const { name, github } = post.contributors.find(
    ({ github }) => github === post.author
  )

  return (
    <article>
      <Link to={`/blog/${post.slug}`} username={post.title} decoration="none">
        <h2>{post.title}</h2>
      </Link>
      <p>{post.excerpt}</p>
      <p>
        <Link to={`/contributors/${github}`} username={name} decoration="none">
          {name}
        </Link>{" "}
        on {post.date}
      </p>
    </article>
  )
}

export default Article
