module.exports = {
  siteMetadata: {
    title: "不如吃茶去",
    author: {
      name: "leviegu",
      summary: "我的灿烂人生。",
    },
    siteUrl: "https://leviegu.cn",
    social: {
      zhihu: "https://www.zhihu.com/people/groof13",
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `不如吃茶去`,
        start_url: `/`,
        icon: `src/static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/static/images/`,
      },
    },
  ],
}
