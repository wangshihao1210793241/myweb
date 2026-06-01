import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: '码农脱贫',
  // 网站描述（搜索引擎用）
  description: '技术博客 - 探索编程世界，记录成长之路',

  // 主题配置
  themeConfig: {
    // 网站Logo
    siteTitle: '码农脱贫',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文章', link: '/posts/' },
    ],

    // 侧边栏
    sidebar: {
      '/posts/': [
        {
          text: 'Java',
          items: [
            { text: 'Java Stream 实战技巧', link: '/posts/java-stream' },
          ],
        },
        {
          text: 'Vue',
          items: [
            { text: 'Vue 快速入门指南', link: '/posts/vue-quick-start' },
          ],
        },
        {
          text: 'Python',
          items: [
            { text: 'Python 基础笔记', link: '/posts/python-basics' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 码农脱贫',
    },

    // 搜索（本地搜索）
    search: {
      provider: 'local',
    },
  },
})
