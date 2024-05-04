import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/zh/": [
        {
            icon: "discover",
            text: "xml脚本教程",
            children: [
                "xml脚本教程/xml脚本规范"
            ],
        },
        {
            icon: "discover",
            text: "脚本列表",
            prefix: "脚本列表/",
            children: "structure",
        },
        {
            icon: "discover",
            text: "脚本选项",
            prefix: "ScriptOptions/",
            children: "structure",
        },
        {
            icon: "discover",
            text: "地编教程",
            prefix: "地编教程/",
            children: [
                {
                    icon: "discover",
                    text: "图文教程",
                    children: [
                        "【地图美化教程第一期】无限岛（纯草地）风格/",
                        "【教程】编辑器中的逻辑和实现方法/",
                        "【教程】镜头移动技巧/",
                        "地图教程/",
                        "地编修桥技巧/",
                        "袜子大佬的地图制作流程/袜子大佬的地图制作流程",
                        "设置物体状态的用法/",
                        "【教程】小地图制作教程简易版/【教程】小地图制作教程简易版",
                        "高级美化及地形制作教程/高级美化及地形制作教程",
                        "【小地图】袜子哥哥教你做质量近乎官方的战场预览小地图/【小地图】袜子哥哥教你做质量近乎官方的战场预览小地图",
                        "塔防地图制作基础/塔防地图制作基础",
                        "添加自定义战役进官方战役里/",
                    ]
                },
                {
                    icon: "discover",
                    text: "技巧",
                    children: [
                        "技巧/脚本的添加和介绍",
                        "技巧/删除出生地的基地车/",
                        "技巧/基础资金电量设置/",
                        "技巧/添加第5,6玩家/",
                        "技巧/科技限制/",
                        "技巧/让AI使用放在地图上的建筑/",
                        "技巧/限制协议-获得协议-限制协议点上限/",
                        "技巧/巡逻/",
                        "技巧/创建和编辑任务目标/创建和编辑任务目标.md",
                        "技巧/任务目标显示隐藏/任务目标显示隐藏.md",
                        "技巧/全屏可见以及反脚本/全屏可见以及反脚本.md",
                        "技巧/占领触发/占领触发.md",
                        "技巧/创建和改变地图边界/创建和改变地图边界.md",
                        "技巧/计时器的使用/计时器的使用.md",
                        "技巧/队伍编辑和生成队伍/队伍编辑和生成队伍.md",
                        "技巧/地形工具使用/地形工具使用.md",
                        "技巧/海洋工具/海洋工具.md",
                        "技巧/波浪/波浪.md",
                        "技巧/锁角工具/锁角工具.md",
                        "技巧/HammerTankUpgrades/HammerTankUpgrades.md",
                        "技巧/工具栏功能/"
                    ]
                },
            ]
        },
        {
            text: "视频教程",
            icon: "discover",
            children: [
                {
                    text: "奏佬-对称地图基本制作操作及思路",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1XW411s7zs/",
                },
                {
                    text: "奏佬-地形有关的工具的使用",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1w4411m7VP/",
                },
                {
                    text: "奏佬-水域，波浪参数",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1p4411m7tM/",
                },
                {
                    text: "奏佬-地形材质工具",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1M7411n7Qt/",
                },
                {
                    text: "奏佬-命名规律属性面板",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1u7411r7e2",
                },
                {
                    text: "奏姥-脚本初步 (了不起的分支判断) & 一个小案例 ",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1N7411e7tY/",
                },
                {
                    text: "奏姥-脚本相关的工具 以及几个小例子--路径点工具 区域 边框切换",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1M7411E7GQ",
                },

                {
                    text: "火华君-任务目标的建立",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1nU4y1V7J9",
                },
                {
                    text: "火华君-AI建造部队以及刷兵问题",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1eo4y1S71U",
                },
                {
                    text: "火华君-文本展示",
                    icon: "discover",
                    link: "https://www.bilibili.com/video/BV1Vg4y1L7rb",
                },

                {
                    text: "【RMA】【地图美化第二期】纯雪地美化第一视角视频教程",
                    icon: "hot",
                    link: "https://v.youku.com/v_show/id_XNzMxODgwNTY4.html",
                },
                {
                    text: "RA3地图编辑器房屋美化实例",
                    icon: "hot",
                    link: "https://v.youku.com/v_show/id_XNzMxMzI0MzA0.html",
                },
                {
                    text: "RA3地图美化示范--东京湾篇",
                    icon: "hot",
                    link: "https://v.youku.com/v_show/id_XOTA0MDA5MTAw.html",
                },
            ],
        },
        // "slides",
    ],
});
