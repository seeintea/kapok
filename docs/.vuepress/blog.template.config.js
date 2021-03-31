// vuepress 基本配置
exports.SelfConf = {
  title: "", // 网站名称
  description: "", // 网站描述
  head: [
    // favicon 配置，默认在存储在 .vuepress/public 中
    ["link", {
      rel: "icon",
      href: "/favicon.ico"
    }]
  ],
  // ... any more
}

// 自动化配置
exports.AutoConf = {
  baseDir: "" // 遍历 markdown 文件根目录
}

// Header 信息配置
exports.HeadConf = {
  title: "", // 网站名称
  dark: true // 配置黑暗模式
}

// Footer 信息配置
exports.FootConf = {
  // 底部链接配置
  link: [{
    name: "", // 网站名称
    href: "", // 链接地址
    data: "" // 小图标
  }],
  miit: "", // 备案信息
  vuepress: true // 显示 vuepress
}

// ListView 信息配置
exports.ListConf = {
  date: "" // 更换日期 logo
}


// HomePage 信息配置
exports.InfoConf = {
  name: "", // 作者名字
  mail: "", // 作者邮件
  slogan: "", // SLOGAN
  avatar: "" // 头像信息
}