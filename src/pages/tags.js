import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const {
    allMdx: { group: data },
  } = useStaticQuery(graphql`
    query TagsQuery {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <>
      {data.map((tag) => (
        <div key={tag.fieldValue}>
          <Link to={`/tags/${tag.fieldValue}`}> {tag.fieldValue}</Link>
          <span>{tag.totalCount}</span>
        </div>
      ))}
    </>
  )
}
