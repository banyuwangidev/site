import React from "react"
import { graphql } from "gatsby"
import PostItem from "../components/PostItem"

export const query = graphql`
  query($tag: String!) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        frontmatter {
          title
          tags
          author
          date(formatString: "MMM D,Y")
        }
        fields {
          slug
          contributors {
            name
            github
          }
        }
        excerpt
      }
    }
  }
`

const PostTemplate = ({ pageContext: context, data }) => {
  const postList = data.allMdx.nodes
  const tag = context.tag.split("-").join(" ");
  
  return (
    <>
      <h3>Tag yang berhubungan dengan {tag}</h3>
      {postList.map(
        ({ frontmatter: post, excerpt, fields: { slug, contributors } }) => (
          <PostItem
            key={slug}
            post={{ ...post, excerpt, slug, contributors }}
          />
        )
      )}
    </>
  )
}

export default PostTemplate