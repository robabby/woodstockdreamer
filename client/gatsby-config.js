const apiUrl = process.env.WSD_API_PORT || "1337";

console.log(`### /apiUrl/ is ${process.env.WSD_API_PORT} ###`);

module.exports = {
  siteMetadata: {
    title: "Woodstock Dreamer",
    author: "Rob Abby",
    description: "Holding the space for transformation"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: apiUrl,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `article`
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
