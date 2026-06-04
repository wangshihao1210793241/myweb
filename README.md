# 码农脱贫 - 个人技术博客

> 探索编程世界，记录成长之路

基于 [VitePress](https://vitepress.dev/) 构建的个人技术博客，专注于 Java、Vue、Python、AI 编程等技术领域的知识分享。

## 🌐 在线访问

**https://wangshihao1210793241.github.io/myweb/**

## 📱 公众号

关注公众号 **「码农脱贫」**，获取更多技术干货和编程教程！

> 搜索公众号：**码农脱贫**

## ✨ 博客内容

| 板块 | 说明 |
|------|------|
| ☕ Java | 后端开发核心，实战经验与最佳实践 |
| 🖖 Vue | 前端框架探索，构建现代化用户界面 |
| 🐍 Python | 脚本与自动化，数据处理的利器 |
| 🤖 从0开始学习AI编程 | 零基础入门AI编程，掌握AI辅助开发技能 |

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/wangshihao1210793241/myweb.git
cd myweb

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动后浏览器访问 http://localhost:5173

### 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run dev -- --host` | 启动并允许局域网访问 |
| `npm run build` | 构建静态网站 |
| `npm run preview` | 预览构建结果 |

## 📁 项目结构

```
myweb/
├── .vitepress/
│   └── config.mts              ← 网站配置（导航、侧边栏、主题等）
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions 自动部署
├── posts/
│   ├── index.md                ← 文章列表页
│   ├── java/                   ← Java 分类文章
│   ├── vue/                    ← Vue 分类文章
│   ├── python/                 ← Python 分类文章
│   └── ai/                     ← AI 编程分类文章
├── public/                     ← 图片等静态资源
├── index.md                    ← 首页
├── package.json                ← 项目依赖
└── README.md
```

## 📝 写新文章

### 1. 在对应分类下创建 Markdown 文件

例如 `posts/java/spring-boot.md`：

```markdown
---
title: Spring Boot 入门
date: 2026-06-04
tags: [Java, Spring Boot]
---

# Spring Boot 入门

这里写文章内容...
```

### 2. 注册到侧边栏

编辑 `.vitepress/config.mts`，在 `sidebar` 对应分类中添加：

```mts
{ text: 'Spring Boot 入门', link: '/posts/java/spring-boot' },
```

### 3. 添加到文章列表

编辑 `posts/index.md`，在对应分类下添加链接：

```markdown
- [Spring Boot 入门](./java/spring-boot)
```

保存后浏览器自动刷新，新文章就出现了。

## 🚢 部署

项目已配置 GitHub Actions 自动部署，推送到 `main` 分支即可自动构建发布到 GitHub Pages。

1. 仓库 Settings → Pages → Source 选择 **"GitHub Actions"**
2. 推送代码后自动部署

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源，欢迎 Star ⭐、Fork 和 PR。

---

<p align="center">
  <b>觉得有用的话，给个 Star ⭐ 支持一下吧！</b>
</p>

<p align="center">
  <b>关注公众号「码农脱贫」，一起成长 💪</b>
</p>
