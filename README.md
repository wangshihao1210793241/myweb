# 码农脱贫 - 个人博客使用说明

## 项目信息

- 技术框架：VitePress（基于 Vue + Vite）
- 博客名称：码农脱贫
- 项目路径：d:/AiWorkSpace/myweb

---

## 一、启动博客

### 1. 打开终端

在项目目录下打开终端（VS Code 中按 `Ctrl + ~` 打开终端）

### 2. 启动命令

```bash
npm run dev
```

### 3. 访问地址

启动后会显示访问地址：

| 方式 | 地址 | 说明 |
|------|------|------|
| 本机访问 | http://localhost:5173 | 自己电脑上访问 |
| 局域网访问 | http://你的IP:5173 | 同 WiFi 下手机/其他设备访问 |

> 局域网访问需要加 `--host` 参数启动：`npm run dev -- --host`

### 4. 停止服务

在终端按 `Ctrl + C` 即可停止

---

## 二、写新文章

### 步骤 1：创建 Markdown 文件

在 `posts/` 目录下新建 `.md` 文件，例如 `posts/spring-boot.md`

```markdown
---
title: Spring Boot 入门
date: 2026-06-01
tags: [Java, Spring Boot]
---

# Spring Boot 入门

这里写文章内容...
```

> frontmatter（三个横线之间的部分）包含标题、日期、标签信息

### 步骤 2：注册到侧边栏

编辑 `.vitepress/config.mts`，在 `sidebar` 对应分类中添加：

```mts
{ text: 'Spring Boot 入门', link: '/posts/spring-boot' },
```

### 步骤 3：添加到文章列表

编辑 `posts/index.md`，在对应分类下添加链接：

```markdown
- [Spring Boot 入门](./spring-boot)
```

保存后浏览器自动刷新，新文章就出现了。

---

## 三、项目结构

```
d:/AiWorkSpace/myweb/
├── .vitepress/
│   ├── config.mts              ← 网站配置（导航、侧边栏等）
│   └── dist/                   ← 构建输出（自动生成，勿手动修改）
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Pages 自动部署配置（已准备）
├── posts/
│   ├── index.md                ← 文章列表页
│   ├── java-stream.md          ← Java 文章
│   ├── vue-quick-start.md      ← Vue 文章
│   └── python-basics.md        ← Python 文章
├── public/                     ← 图片等静态资源
├── index.md                    ← 首页
├── package.json                ← 项目依赖
├── .gitignore                  ← Git 忽略文件
└── README.md                   ← 本说明文件
```

---

## 四、常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（本地预览） |
| `npm run build` | 构建静态网站（部署时用） |
| `npm run preview` | 预览构建结果 |

---

## 五、部署到 GitHub Pages（待操作）

等科学上网恢复后执行：

### 1. 在 GitHub 创建仓库

- 名称：myweb
- 可见性：Public
- 不要勾选任何初始化选项

### 2. 推送代码

```bash
git init
git add .
git commit -m "init: 初始化博客"
git remote add origin https://github.com/你的用户名/myweb.git
git branch -M main
git push -u origin main
```

### 3. 开启 GitHub Pages

仓库页面 → Settings → Pages → Source 选择 "GitHub Actions"

### 4. 访问博客

```
https://你的用户名.github.io/myweb/
```

> deploy.yml 已配置好，push 代码后会自动构建部署

---

## 六、快捷操作参考

| 我想... | 操作 |
|---------|------|
| 启动博客 | 终端输入 `npm run dev` |
| 看博客 | 浏览器打开 http://localhost:5173 |
| 手机看博客 | `npm run dev -- --host`，手机浏览器打开显示的 Network 地址 |
| 写新文章 | 在 `posts/` 下新建 `.md` 文件，参考现有文章格式 |
| 改网站配置 | 编辑 `.vitepress/config.mts` |
| 改首页 | 编辑 `index.md` |
| 关闭博客 | 终端按 `Ctrl + C` |
