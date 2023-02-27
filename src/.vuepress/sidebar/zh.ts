import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "脚本列表",
      prefix: "scripts/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "脚本选项",
      prefix: "脚本选项/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "地编教程",
      prefix: "地编教程/",
      children: [
        "【地图美化教程第一期】无限岛（纯草地）风格/",
        "【教程】编辑器中的逻辑和实现方法/",
        "【教程】镜头移动技巧/",
        "地图教程/",
        "地编修桥技巧/",
        "设置物体状态的用法/",
      ]
    },
    // "slides",
  ],
});
