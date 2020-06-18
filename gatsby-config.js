const THEME = require(`./src/utils/theme`);

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    titleTemplate: '%s | Gatsby Starter',
    description: `Everything you need for a sweet Gatsby site.`,
    siteUrl: `https://www.example.com`,
    image: '/static/open-graph.png',
    twitterUsername: '',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-svg-sprite`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: THEME.colors.black,
        theme_color: THEME.colors.white,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-********-*`,
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
};
