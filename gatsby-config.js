/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vaino`,
    siteUrl: `https://www.vaino.lol`,
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-vscode',
          options: {
            theme: 'Abyss'
          }
        }]
      }
    }
  ],
}
