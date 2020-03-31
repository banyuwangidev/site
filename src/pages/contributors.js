import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Contributors = () => {
  const {
    allMdx: { group: data, nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        group(field: frontmatter___author) {
          fieldValue
          totalCount
        }
        nodes {
          fields {
            contributors {
              github
              name
            }
          }
        }
      }
    }
  `)

  const getName = username => {
    let res = nodes
      .map(({ fields }) => fields.contributors)[0]
      .find(x => x.github === username)
    return res
  }

  return (
    <>
      {data.map(contributor => {
        return (
          <div key={contributor.fieldValue}>
            <Link to={`/contributors/${contributor.fieldValue}`}>
              {getName(contributor.fieldValue).name} {""}
              <span>{contributor.totalCount}</span>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Contributors