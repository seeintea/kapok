/**
 * 遍历文章目录生成 homepage.json
 */

const {
  AutoConf
} = require("./blog.config")

const path = require("path");
const fs = require("fs");
const matter = require('gray-matter');
const moment = require("moment");

// 获取文章存放目录
const dirPath = path.resolve(__dirname, "..", AutoConf.baseDir);

const getFiles = (dirPath) => {
  return new Promise((reslove, reject) => {
    fs.readdir(dirPath, (error, data) => {
      if (error) {
        reject(error);
      }
      // 过滤隐藏文件
      for (let i = 0; i < data.length; i++) {
        if (data[i].indexOf(".") === 0) {
          data.splice(i, 1);
        }
      }
      reslove(data)
    })
  })
}

// 解析文章 yaml-front 信息
const getFileYmal = async (dirPath, file, data) => {
  // 构建文章路径
  const single = path.resolve(dirPath, file)
  // 获取文章信息
  const content = fs.readFileSync(single, 'utf8');
  // 解析 yaml-front
  const ymal = matter(content).data;
  // 获取文档创建时间
  const create_time = fs.statSync(single).ctime;
  ymal.create_time = moment(create_time).format("ddd, Mo D YYYY");
  const html = file.replace(/md$/, "html");
  ymal.url = `/${AutoConf.baseDir}/${html}`;
  data.push(ymal);
}

// 生成 auto.json
const auto = async () => {
  const files = await getFiles(dirPath);
  const data = [];
  for (file of files) {
    await getFileYmal(dirPath, file, data);
  }
  const json = JSON.stringify(data);
  try {
    const autoPath = path.resolve(__dirname) + "/auto.json";
    fs.writeFileSync(autoPath, json)
  } catch (error) {
    throw error;
  }
  console.log("%c[ok] auto.json completed.", "color: #b20000");
}

auto();