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
      {data.map(({ fieldValue, totalCount: count }) => {
        const tag = fieldValue.split("-").join(" ");
        return (
          <div key={tag}>
            <Link to={`/tags/${tag}`}> {tag}</Link>
            <span>{count}</span>
          </div>
        )
      })}
    </>
  )
}
