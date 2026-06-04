import { defineConfig } from 'vitepress'

export default defineConfig({
  // 部署路径（GitHub Pages 仓库名）
  base: '/myweb/',

  // 忽略死链接检查（README 中的 localhost 地址）
  ignoreDeadLinks: true,

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
            { text: 'Java Stream 实战技巧', link: '/posts/java/java-stream' },
          ],
        },
        {
          text: 'Vue',
          items: [
            { text: 'Vue 快速入门指南', link: '/posts/vue/vue-quick-start' },
          ],
        },
        {
          text: 'Python',
          items: [
            { text: 'Python 基础笔记', link: '/posts/python/python-basics' },
          ],
        },
        {
          text: '从0开始学习AI编程',
          items: [
            { text: '0.入门指南', link: '/posts/ai/ai-programming-start' },
            { text: '1.Claude Code安装指南', link: '/posts/ai/ClaudeCodeInstallGuide' },
            { text: '2.Java 程序员用 Claude Code 写代码踩过的坑', link: '/posts/ai/java-claude-code-guide' },
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
