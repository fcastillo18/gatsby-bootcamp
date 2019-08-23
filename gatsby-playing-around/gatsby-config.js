/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Using this property to use graphql to fetch this data */
  siteMetadata: {
    title: "Blog with Gatsby",
    author: "Franklin Castillo",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      // telling Gatsby to source content from the file System
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
