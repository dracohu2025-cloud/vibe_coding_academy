---
title: "Claude Code"
phase: "wiki"
---

# Claude Code: 终端里的幽灵

> "GUI 只是累赘。真正的黑客只用命令行。"

**Claude Code** 是 Anthropic 推出的 CLI (命令行) 工具。它没有花哨的界面，它就活在你的 Terminal 里。

## 核心玩法

### 1. 深度系统集成

安装它之后，它就拥有了你终端的所有权限（当然，是在你允许的范围内）。
它可以直接运行 `git` 命令，可以直接 `ls` 查看文件，可以直接 `vim` 修改文件。

### 2. "帮我把这两个库这一百个文件都改了"

这是它最强的地方。
对于那种跨越几十个文件、枯燥乏味的重构任务（比如：把所有的 class 组件改成 function 组件），你在 VS Code 里要改一天。
在终端里，你只要输入：
`claude "Refactor all class components in src/ to functional components."`
然后你去喝咖啡。
半小时后回来，它已经改完了，跑通了测试，并且 `git commit` 了。

### 3. MCP 协议支持

通过 **MCP (Model Context Protocol)**，它可以连接到你的数据库、你的 Slack、你的 GitHub Issue。
你可以让它："看看最近那个 Issue #102 是什么，然后去数据库里查查相关数据，最后试着修一下代码。"

## 评价

**"它是你的影子开发者。沉默，高效，致命。"**
