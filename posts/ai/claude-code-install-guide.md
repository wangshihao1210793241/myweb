# 1. Claude Code 安装与使用指南

## 1.1 打开 PowerShell 工具

### 1.1.1 使用 WinGet 安装（推荐）

```powershell
winget install Anthropic.ClaudeCode
```

卸载方式：

```powershell
winget uninstall Anthropic.ClaudeCode
```

安装完毕后可以通过以下命令验证是否安装成功：

```powershell
claude --version
```

查看安装路径：

```powershell
Get-Command claude | Select-Object Source
```

正常情况下通过 WinGet 安装后，环境变量会自动配置好。

## 1.2 配置环境变量

如果环境变量未自动配置，可以复制上一步获取的安装路径，手动添加到系统环境变量 `PATH` 中。

windows用户直接在搜索框，搜：环境变量会弹出系统属性，点击环境变量按钮，可以配置path

## 1.3 运行 Claude Code

新建一个文件夹，右键打开终端，输入 `claude` 命令即可启动。

首次运行需要登录你的 Claude 账号(我们应该是无法使用的，需要借助cc switch完成)

## 1.4配置国内大模型，安装cc Switch
关注【码农脱贫】回复cc可以领取cc Switch安装包。下载之后全部下一步就可以安装。

安装完毕后，点击右上角 加号，可以添加自己的大模型

新手可以先使用新用户的优化体验一下，等流程都搞明白了在使用付费大模型。

## 1.5 Claude Code 常用命令介绍

| 命令 | 说明 |
|------|------|
| `claude --version` | 查看版本号 |
| `claude` | 启动对话 |
| `claude "你的问题"` | 直接提问 |

## 1.6 使用小技巧

- 在项目根目录下启动 Claude Code，它能更好地理解你的项目结构
- 善用具体的指令描述，能获得更准确的回答
- Claude Code 支持读取和编辑文件，可以直接让它帮你修改代码

---

*原创不易，你的点赞和转发是对码农的最大鼓励！*
