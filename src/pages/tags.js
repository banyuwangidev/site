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
        const t = fieldValue.replace(/-/gi, "")
        return (
          <div key={fieldValue}>
            <Link to={`/tags/${fieldValue}`}>{`#${t}`}</Link>
            <span>{count}</span>
          </div>
        )
      })}
    </>
  )
}
