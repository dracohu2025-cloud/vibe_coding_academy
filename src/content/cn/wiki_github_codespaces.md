---
title: "GitHub Codespaces"
phase: "wiki"
---

# GitHub Codespaces：云端基地保姆级教程

> "给我一个浏览器，我就能撬动整个代码库。"

**[[GitHub Codespaces]]** 是 GitHub 提供的即时云端开发环境。它不仅仅是一个网页版的 VS Code，而是一台你可以随时调用的、配置完美的 Linux 电脑。

对于 Vibe Coding 新手来说，这意味着：**你永远不再需要配置本地环境**。再也不用因为安装 Python 版本冲突而头秃了。

---

## 🚀 0. 为什么你需要它？ (What & Why)

### 痛点

* ❌ 换了台电脑，又得重新配环境，装 Node, Python, Git...
* ❌ 实习生入职，第一周都在配环境。
* ❌ 只要一跑大模型，MacBook 风扇就起飞，大腿被烫熟。
* ❌ 想在 iPad 或公司电脑上临时改个 Bug，但没有 IDE。

### Codespaces 的解法

* ✅ **即开即用**：环境跟代码库绑定，点一下按钮，环境就有了。
* ✅ **云端算力**：你的电脑只是个显示器，编译、运行都在微软的云服务器上（默认 2核 或 4核，甚至可以用 GPU）。
* ✅ **完全一致**：通过配置文件，确保所有人的开发环境 100% 一样。

---

## 🛠️ 1. 如何启用？ (快速上手)

你不需要信用卡（个人用户每月有 **60小时** 免费额度，对新手完全够用）。

### 方法 A：在 GitHub 网页端 (最常用)

1. 打开任意一个 GitHub 仓库（比如你复刻的 `vibe_coding_rookie`）。
2. 点击绿色的 **< > Code** 按钮。
3. 切换到 **Codespaces** 标签页。
4. 点击绿色的 **Create codespace on main** 按钮。
5. **等待 1-2 分钟**。GitHub 正在为你拨备一台虚拟机，安装 VS Code Server，并克隆代码。
6. **成功！** 你会看到一个熟悉的 VS Code 界面，只是它运行在浏览器里。

### 方法 B：黑客快捷键 (最酷)

1. 打开任意 GitHub 仓库页面。
2. 按一下键盘上的 **`.` (句号)** 键。
3. 它会立刻变身 Web 版 VS Code。但这还只是“Web 编辑器”（不能运行代码）。
4. 如果要运行代码，点击左下角的 **Switch to Codespace**，它就会升级成完全体云服务器。

---

## ⚙️ 2. 核心配置：它怎么知道我要装什么？ (.devcontainer)

这一步是 Vibe Coder 进阶的关键。
Codespaces 的灵魂在于根目录下的 `.devcontainer` 文件夹。

### 只要这个文件夹里有配置文件

* `devcontainer.json`: 告诉 Codespaces 要装什么插件 (Extensions)、用什么 Linux 镜像 (Image)。

**示例 (让你的环境自动安装 [[ESLint]] 和 Prettier 插件):**

```json
// .devcontainer/devcontainer.json
{
  "name": "Vibe Coding Environment",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

**新手怎么做？**
如果你不懂怎么写，没关系。
在 Codespaces 里，按下 `F1` (或 `Ctrl/Cmd + Shift + P`)，输入：
`> Codespaces: Add Dev Container Configuration Files`
然后跟着向导选（比如选 Node.js），它会自动帮你生成这个配置！

---

## 🎮 3. 日常使用技巧 (Lifecycle)

### 用完记得停！(Stop)

虽然有免费额度，但也不要浪费。

* **关闭标签页**：它会自动挂起，但为了保险，建议手动停止。
* **手动停止**：在 Codespaces 左下角点击 **Codespaces** > **Stop Current Codespace**。
* **自动休眠**：默认闲置 30 分钟后会自动关闭，不用太担心。

### 怎么重新连接？

1. 回到 GitHub 仓库页面。
2. 点 **< > Code** > **Codespaces**。
3. 你会看到刚才创建的实例，点击它即可**秒级恢复**现场。

### 怎么删除？ (Delete)

如果这个环境玩坏了，或者不需要了：
去 [github.com/codespaces](https://github.com/codespaces)，找到它，点击 `...` -> **Delete**。
旧的不去，新的不来。

---

## 💡 4. 进阶：本地 VS Code 连接云端

觉得浏览器快捷键不顺手？
你可以用**本地的 VS Code** 连接到云端的 Codespaces！

1. 在本地 VS Code 安装 **[[GitHub Codespaces]]** 插件。
2. 点击左下角的绿色远端图标 ><。
3. 选择 **Connect to Codespace...**。
4. 选择你云端的实例。
5. **Boom!** 用本地丝滑的 App 操作云端强大的服务器。

---

## 总结

**[[GitHub Codespaces]]** 就是你的**云端网吧**。
只要有账号，坐下就能玩（写代码）。不用管机箱里装的什么显卡，不用管网管（运维）怎么装系统。

**现在，去你的仓库里按下 `.` 键试试吧！**
