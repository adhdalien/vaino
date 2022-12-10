/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vaino`,
    siteUrl: `https://www.vaino.lol`,
  },
  plugins: [
    // StaticImage component
    "gatsby-plugin-image",
    // Handles the actual image processing that is used by gatsby-plugin-image.
    "gatsby-plugin-sharp",
    // Filesystem data source
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
