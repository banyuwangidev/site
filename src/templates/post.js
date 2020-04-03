import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { StoreCtx } from "../shared/context"
import Link from "../components/Link"
import Avatar from "../components/Avatar"

const PostContent = styled.article``

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        tags
        date(fromNow: true)
        image {
          sharp: childImageSharp {
            fixed(width: 1000, height: 500) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      fields {
        contributors {
          name
          github
          bio
          site
        }
      }
      body
    }
  }
`

const AuthorPost = ({ author, contributors }) => {
  const data = contributors.find((x) => x.github === author)
  const avatar = `https://avatars1.githubusercontent.com/${data.github}?size=100`

  return (
    <div>
      <h4>{data.name}</h4>
      <Link to={`/contributors/${data.github}`}>{data.github}</Link>
      <Link to={data.site} external>
        {data.site}
      </Link>
      <Avatar size="small" src={avatar} username={data.github} />
      <p>{data.bio}</p>
    </div>
  )
}

const PostTemplate = ({ data: { mdx: post } }) => {
  const { setCrumbPage } = React.useContext(StoreCtx)
  const { image, tags, title, author, date } = post.frontmatter

  React.useEffect(() => {
    setCrumbPage(() => ["blog", title])
  }, [setCrumbPage, title])

  return (
    <>
      {image ? (
        <Image
          style={{ width: "100%", maxWidth: 1440 }}
          imgStyle={{ height: 400 }}
          objectFit="cover"
          objectPosition="50% 50%"
          fixed={image.sharp.fixed}
          alt={title}
        />
      ) : null}

      <h1>{title}</h1>
      <AuthorPost author={author} contributors={post.fields.contributors} />
      <p>{date}</p>
      <div>
        {tags.map((tag) => (
          <div key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </div>
        ))}
      </div>
      <PostContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostContent>
    </>
  )
}

export default PostTemplate
