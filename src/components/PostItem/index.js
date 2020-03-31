import React from "react"
import { Link } from "gatsby"

const PostItem = ({ post }) => {
  const { name, github } = post.contributors.find(
    ({ github }) => github === post.author
  )

  return (
    <article>
        <h2>
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p>{post.excerpt}</p>
        <p><Link to={`/contributors/${github}`}>{name}</Link> on {post.date}</p>
    </article>
  )
}

export default PostItem