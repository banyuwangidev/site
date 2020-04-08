import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { css } from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Alert from "../components/Alert"
import Link from "../components/Link"
import Avatar from "../components/Avatar"
import { colors } from "../shared/global"
import { StoreCtx } from "../shared/context"

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const PostContent = styled.article``
const PostTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`
const PostProfile = styled.div`
  margin: 32px 0 28px;
  text-align: center;
`
const ProfileLink = styled.div`
  padding-top: 6px;
  max-width: 400px;
  ${flexCenter};
  a {
    color: ${colors.primary};
    &:not(:last-child) {
      margin-right: 0.75em;
    }
  }
`

const ProfileAuthor = styled.div`
  span {
    opacity: 0.8;
    font-size: 14px;
  }
`

const PostTag = styled.div`
  max-width: 400px;
  ${flexCenter};
  a {
    &:not(:last-child) {
      margin-right: 0.75em;
    }
  }
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

const AuthorPost = ({ data: { author, contributors, tags } }) => {
  const data = contributors.find((x) => x.github === author)
  const avatar = `https://avatars1.githubusercontent.com/${data.github}?size=42`

  return (
    <PostProfile>
      <ProfileAuthor>
        <div style={{ margin: "4px 6px 0 6px" }}>
          <Avatar size="small" src={avatar} label={data.github} />
        </div>
        <Link to={`/contributors/${data.github}`} decoration="none">
          <h4>{data.name}</h4>
          <span>{data.bio}</span>
        </Link>
      </ProfileAuthor>
      <ProfileLink>
        <Link to={data.site} external>
          website
        </Link>
      </ProfileLink>
      <PostTag>
        {tags.map((tag) => {
          const t = tag.replace(/-/gi, "")
          return (
            <React.Fragment key={t}>
              <Link to={`/tags/${tag}`} decoration="none">{`#${t}`}</Link>
            </React.Fragment>
          )
        })}
      </PostTag>
    </PostProfile>
  )
}

const PostTemplate = ({ data: { mdx: post } }) => {
  const { setCrumbPage } = React.useContext(StoreCtx)
  const { image, tags, title, author, date } = post.frontmatter
  const dateToday = new Date()
  const dateLate = new Date(date)
  const isOldPost = (dateToday - dateLate) / (1000 * 3600 * 24 * 365)

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
              Artikel ini sudah {Math.floor(isOldPost)} tahun lamanya,
              kemungkinan beberapa topik tidak relevan.
            </Alert>
          </div>
      ) : null}
      <PostTitle>{title}</PostTitle>
      <AuthorPost
        data={{ author, contributors: post.fields.contributors, tags }}
      />
      <PostContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostContent>
    </>
  )
}

export default PostTemplate
