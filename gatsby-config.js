let apiUrl;
let apiPort;

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'http://api.woodstockdreamer.com';
  apiPort = "6001";
} else {
  apiUrl = 'http://localhost';
  apiPort = "1337";
}


console.log(`### /apiUrl/ is ${apiUrl}:${apiPort} ###`);

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
        apiURL: `${apiUrl}:${apiPort}`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `article`
        ]
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
