/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const contributorList = require("./contents/contributors/index.js")
const postTemplate = require.resolve("./src/templates/post.js")
const tagTemplate = require.resolve("./src/templates/tag.js")
const ContributorTemplate = require.resolve("./src/templates/contributor.js")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    // membuat field node slug
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // membuat field node contributor
    createNodeField({
      node,
      name: `contributors`,
      value: contributorList,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            tags
          }
          fields {
            slug
            contributors {
              github
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panic("failed to create posts", results.errors)
  }

  const tagSet = new Set()
  const contributorSet = new Set()

  const nodes = results.data.allMdx.nodes
  nodes.forEach(({ frontmatter, fields }) => {
    // loop tag
    if (frontmatter.tags) {
      frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    }

    if (fields.contributors) {
      fields.contributors.forEach(contributor => {
        contributorSet.add(contributor)
      })
    }

    actions.createPage({
      path: `/blog${fields.slug}`,
      component: postTemplate,
      context: {
        slug: fields.slug,
      },
    })
  })

  const tagList = Array.from(tagSet)
  tagList.forEach(tag => {
    actions.createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })

  const contributorList = Array.from(contributorSet)
  contributorList.forEach(contri => {
    actions.createPage({
      path: `/contributors/${contri.github}`,
      component: ContributorTemplate,
      context: {
        contributor: contri.github,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
  })
}