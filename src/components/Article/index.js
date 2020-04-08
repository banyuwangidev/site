import React from "react"
import styled from "styled-components"

import Avatar from "../Avatar"
import Link from "../Link"

// NEED TO CREATE SIZE OF TYPOGRAPH
const ArticlePost = styled.article`
  h1 {
    font-size: 40px;
    margin: 8px 0 16px 0;
    line-height: 48px;
  }
`

const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 16px;
  a {
    margin-left: 8px;
  }
`

const ArticleExcerpt = styled.p`
  color: #565656;
`

const ArticlePointer = styled.div`
  margin: 16px 0;
  span {
    transition: all 0.2s ease;
    position: relative;
    left: 0;
  }

  a:hover > span {
    left: 6px;
  }
`

const Article = ({ post }) => {
  const { name, github } = post.contributors.find(
    ({ github }) => github === post.author
  )

  return (
    <ArticlePost>
      <Link to={`/blog/${post.slug}`} username={post.title} decoration="none">
        <h1>{post.title}</h1>
      </Link>
      <ArticleAuthor>
        <Avatar
          src={`https://avatars1.githubusercontent.com/${post.author}?size=32`}
          size="tiny"
        />
        <span>
          <Link
            to={`/contributors/${github}`}
            username={name}
            decoration="none"
          >
            {`${name} `}
          </Link>
          on {post.date}
        </span>
      </ArticleAuthor>
      <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
      <ArticlePointer>
        <Link to={`/blog/${post.slug}`} username={post.title} decoration="none">
          Baca selengkapnya <span>--></span>
        </Link>
      </ArticlePointer>
    </ArticlePost>
  )
}

export default Article
