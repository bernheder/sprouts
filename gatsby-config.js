module.exports = {
  siteMetadata: {
    title: `Green Power Sprouts`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name:'Produkte',
        link:'/#products'
      },
      {
        name:'Artikel',
        link:'/#articles'
      },
      {
        name:'Über uns',
        link:'/about-us'
      }
    ],
    footerLinks: [
      {
        name:'Impressum',
        link:'/impressum'
      },
      {
        name:'Datenschutzhinweis',
        link:'/datenschutzhinweis'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
        ],
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
 

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
