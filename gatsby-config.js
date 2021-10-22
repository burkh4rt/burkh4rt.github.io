/**
 * Cf.: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Michael Burkhart's website`,
    siteUrl: `https://burkh4rt.github.io`,
    twitterUsername: `burkh4rt`,
    description: `Michael Burkhart's homepage. Snippets from work and life, with links.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
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
        icon: `src/logos/m.svg`,
        icon_options: {
          purpose: `maskable`,
        },
        background_color: `#fff`,
        theme_color: `#046a38`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `sitemap.xml`, // the default
      },
    },
  ],
}
