import { getDirname, path } from '@vuepress/utils'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

// @ts-ignore
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // base: "",
  base: "/ra3mapwiki/",

  lang: "zh-CN",
  title: "红警3地图百科",
  description: "A world for your own RA3 !",
  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),

  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
