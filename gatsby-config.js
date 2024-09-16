/*
Cf.: https://www.gatsbyjs.org/docs/gatsby-config/
*/

module.exports = {
  siteMetadata: {
    title: `Michael Burkhart's website`,
    siteUrl: `https://burkh4rt.github.io`,
    twitterUsername: `burkh4rt`,
    description: `Michael Burkhart's homepage. Snippets from work and life, with links.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-well-known`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-P9BKGH7JBF'],
      },
      gtagConfig: {
        cookie_expires: 0,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Burkhart's Site`,
        short_name: `burkh4rt's homepage`,
        description: `Snippets from work and life, with links`,
        lang: `en`,
        start_url: `/`,
        icon: `static/m.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
        background_color: `#800000`,
        theme_color: `#800000`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://burkh4rt.github.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
