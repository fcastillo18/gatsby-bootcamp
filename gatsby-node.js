/*The Gatsby node configuration file that
 expose the Node API of the Gatsby's project im working on
 https://www.gatsbyjs.org/docs/node-apis/

 We export functions, and they register to gatsby when the application runs
 when a new node is created
*/
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1- Get path to template
  //2- Get markdown data
  //3- Create new pages
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
