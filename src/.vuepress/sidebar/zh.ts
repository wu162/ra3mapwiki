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
    // "slides",
  ],
});
