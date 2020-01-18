const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  query PostList {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            author
            category
            tags
            image
            summary
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.fields.slug,
        }
      })
    })

    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/post-list.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })

  })
}