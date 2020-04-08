import React from "react"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"

import Article from "../components/Article"
import Link from "../components/Link"
import { colors } from "../shared/global"
import Avatar from "../components/Avatar"
import { StoreCtx } from "../shared/context"

const flexCenter = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
const PostTitle = styled.h1`
  text-align: center;
  font-size: 2em;
`

const ProfileLink = styled.div`
  padding-top: 6px;
  a {
    color: ${colors.primary};
    &:not(:last-child) {
      margin-right: 0.75em;
    }
  }
`

const ProfileAuthor = styled.div`
  ${flexCenter}

  margin-bottom: 3em;

  p {
    text-align: center;
    margin-bottom: 1em;
    max-width: 32em;
  }
`

export const query = graphql`
  query($contributor: String!) {
    allMdx(
      filter: { frontmatter: { author: { eq: $contributor } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        frontmatter {
          title
          author
          date(formatString: "MMM D,Y")
        }
        fields {
          slug
        }
        excerpt
      }
    }
    mdx {
      fields {
        contributors {
          github
          name
          bio
          site
        }
      }
    }
  }
`

const ContributorTemplate = ({
  pageContext: context,
  data: {
    allMdx: posts,
    mdx: {
      fields: { contributors },
    },
  },
}) => {
  const { setCrumbPage } = React.useContext(StoreCtx)
  const filteredPost = posts.nodes.filter(
    (post) => post.author !== context.contributor
  )
  const contributor = contributors.find((x) => x.github === context.contributor)
  const avatar = `https://avatars1.githubusercontent.com/${context.contributor}?size=100`
  const github = `github.com/${context.contributor}`

  React.useEffect(() => {
    setCrumbPage(() => contributor.name)
    return () => {
      setCrumbPage(() => undefined)
    }
  }, [setCrumbPage, contributor.name])

  return (
    <div>
      <ProfileAuthor>
        <Avatar size="large" src={avatar} username={context.contributor} />
        <PostTitle>{contributor.name}</PostTitle>
        <p>{contributor.bio}</p>
        <ProfileLink>
          <Link to={github} external>
            {`@${contributor.github}`}
          </Link>
          <Link to={contributor.site} external>
            {contributor.site}
          </Link>
        </ProfileLink>
      </ProfileAuthor>
      <div>
        {filteredPost.map(
          ({ frontmatter: post, excerpt, fields: { slug } }) => (
            <Article
              key={slug}
              post={{ ...post, excerpt, slug, contributors }}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ContributorTemplate
