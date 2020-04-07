import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Link from "../components/Link"
import Avatar from "../components/Avatar"
import Alert from "../components/Alert"

import { StoreCtx } from "../shared/context"

const PostContent = styled.article``
const PostTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        tags
        date(formatString: "DD MMMM, YYYY")
        image {
          sharp: childImageSharp {
            fixed(width: 700, height: 300) {
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
  const avatar = `https://avatars1.githubusercontent.com/${data.github}?size=42`

  return (
    <div>
      <h4>{data.name}</h4>
      <Link to={`/contributors/${data.github}`}>{data.github}</Link>
      <Link to={data.site} external>
        {data.site}
      </Link>
      <Avatar size="small" src={avatar} label={data.github} />
      <div>{data.bio}</div>
    </div>
  )
}

const PostTemplate = ({ data: { mdx: post } }) => {
  const { setCrumbPage } = React.useContext(StoreCtx)
  const { image, tags, title, author, date } = post.frontmatter
  const dateToday = new Date()
  const dateLate = new Date(date)
  const isOldPost = (dateToday - dateLate) / (1000 * 3600 * 24 * 365);

  React.useEffect(() => {
    setCrumbPage(() => title)
    return () => {
      setCrumbPage(() => undefined)
    }
  }, [setCrumbPage, title])

  return (
    <>
      {image ? (
        <Image
          style={{
            width: "100%",
            maxWidth: 700,
            borderRadius: 6,
            marginBottom: 16,
          }}
          objectFit="cover"
          objectPosition="50% 50%"
          fixed={image.sharp.fixed}
          alt={title}
        />
      ) : null}
      {isOldPost > 1 ? (
        <div style={{ marginBottom: 16 }}>
          <Alert type="warning">
            
              Artikel ini sudah {Math.floor(isOldPost)} tahun lamanya, kemungkinan beberapa topik
              tidak relevan.
            
          </Alert>
        </div>
      ) : null}
      <PostTitle>{title}</PostTitle>
      <AuthorPost author={author} contributors={post.fields.contributors} />
      <div>
        {tags.map((tag) => {
          const t = tag.replace(/-/gi, "")
          return (
            <div key={t}>
              <Link to={`/tags/${tag}`}>{`#${t}`}</Link>
            </div>
          )
        })}
      </div>
      <PostContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostContent>
    </>
  )
}

export default PostTemplate
