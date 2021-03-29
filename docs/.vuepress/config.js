const {
  SelfConf
} = require("./blog.config");

module.exports = {
  ...SelfConf,
  extend: '@vuepress/theme-default',
  themeConfig: {
    navbar: false
  }
}