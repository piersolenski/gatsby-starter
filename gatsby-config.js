const THEME = require(`./src/utils/theme`);
require('dotenv').config();
const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: pkg.title,
    description: pkg.description,
    siteUrl: pkg.homepage,
    twitterUsername: '',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
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
        name: pkg.title,
        short_name: pkg.title,
        start_url: `/`,
        background_color: THEME.colors.black,
        theme_color: THEME.colors.white,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-********-*`,
    //     head: false,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
};
