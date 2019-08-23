/*The Gatsby node configuration file that
 expose the Node API of the Gatsby's project im working on
 https://www.gatsbyjs.org/docs/node-apis/

 We export functions, and they register to gatsby when the application runs
 when a new node is created
*/
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    //console.log("@@@@@@@@@@@@@@@", slug)
    //console.log(JSON.stringify(node, undefined, 4))
  }
}
