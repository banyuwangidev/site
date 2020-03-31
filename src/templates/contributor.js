import React from "react"
import { graphql } from "gatsby"
import PostItem from "../components/PostItem"
import LinkExternal from "../components/LinkExternal"

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
  const filteredPost = posts.nodes.filter(
    post => post.author !== context.contributor
  )
  const contributor = contributors.find(x => x.github === context.contributor)
  const avatar = `https://avatars1.githubusercontent.com/${context.contributor}?size=100`
  const github = `http://github.com/${context.contributor}`
  
  return (
    <div>
      <h1>Contributor</h1>
      <img src={avatar} alt={context.contributor} />
      <h1>{contributor.name}</h1>
      <p>{contributor.bio}</p>
      <LinkExternal link={github} text={contributor.github} />
      <div>
        {filteredPost.map(({ frontmatter: post, excerpt, fields: { slug }}) => (
          <PostItem key={slug} post={{...post, excerpt, slug, contributors }}/>
        ))}
      </div>
    </div>
  )
}

export default ContributorTemplate