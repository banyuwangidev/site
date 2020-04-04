import React from "react"
import { graphql } from "gatsby"

import PostItem from "../components/PostItem"
import { StoreCtx } from "../shared/context"

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
  const { setCrumbPage } = React.useContext(StoreCtx)
  const postList = data.allMdx.nodes
  const tag = context.tag.replace(/-/gi, "")

  React.useEffect(() => {
    setCrumbPage(() => tag)
    return () => {
      setCrumbPage(() => undefined)
    }
  }, [setCrumbPage, tag])

  return (
    <>
      <h3>
        Tag yang berhubungan dengan <u>{`#${tag}`}</u>
      </h3>
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
