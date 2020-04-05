import React from "react"
import { graphql } from "gatsby"

import Article from "../components/Article"
import Link from "../components/Link"
import Avatar from "../components/Avatar"
import { StoreCtx } from "../shared/context"

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
      <h1>Contributor</h1>
      <Avatar size="large" src={avatar} username={context.contributor} />
      <h1>{contributor.name}</h1>
      <p>{contributor.bio}</p>
      <Link to={github} external>
        {contributor.github}
      </Link>
      <Link to={contributor.site} external>
        {contributor.site}
      </Link>
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
