module.exports = {
  "title": "Guang",// 博客网站的标题
  "description": "前端知识分享",// 博客网站的描述
  "dest": "public",// 打包生成文件的路径
  "plugins": [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码",
      tip: {
        content: "复制成功",
      },
    },
    "vuepress-plugin-auto-sidebar", {}
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"// favicon图标，在/.vuepress/public目录下
      }
    ],
    [
      "meta",
      {
        "name": "viewport",// 使用的主题
        "content": "width=device-width,initial-scale=1,user-scalable=no"// 主题配置
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Emptyverse",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "sidebar": {
      "/docs/vue2/": [
        "",
        "vue-basic",
        "vue-advanced",
        "vue-vuex",
        "vue-router"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "subSidebar": 'auto',
    "logo": "/logo.png",// 网站左上角的Logo图片，存放在/.vuepress/public目录下
    "search": true,// 是否开启搜索功能
    "searchMaxSuggestions": 10,//搜索给出的最大建议条数
    "lastUpdated": "Last Updated",// 最后更新时间
    "author": "",// 网站作者
    "authorAvatar": "/avatar.jpg",//作者头像
    "record": "xxxx",// 备案信息
    "startYear": "2017"// 网站始于xxxx年
  },
  "markdown": {
    "lineNumbers": true
  }
}