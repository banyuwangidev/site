import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const {
    allMdx: { nodes: data },
  } = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            title
            author
            date(formatString: "MMM D,Y")
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
          fields {
            slug
            contributors {
              name
              github
            }
          }
        }
      }
    }
  `)

  return data.map((post) => {
    return {
      title: post.frontmatter.title,
      author: post.frontmatter.author,
      date: post.frontmatter.date,
      slug: post.fields.slug,
      image: post.frontmatter.image,
      excerpt: post.excerpt,
      contributors: post.fields.contributors,
    }
  })
}

export default usePosts
