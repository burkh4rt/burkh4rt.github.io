/**
 * Cf.: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://burkh4rt.github.io`,
    twitterUsername: `burkh4rt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
        includePaths: [],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
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
        icon: `src/images/m.svg`,
        icon_options: {
          purpose: `maskable`,
        },
        background_color: `#fff`,
        theme_color: `#046a38`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-140252994-1",
      },
    },
  ],
}
