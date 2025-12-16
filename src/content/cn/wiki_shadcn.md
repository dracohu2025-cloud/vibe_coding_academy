---
title: "Shadcn/UI"
phase: "wiki"
---

# Shadcn/UI: 不是组件库，是秘密武器

> "给拥有者以控制权。"

**[[Shadcn/UI]]** (发音类似 "Shad-cn") 是 2024-2025 年最火的前端现象。但它**不是**一个像 Ant Design 或 Material UI 那样的 npm 包。

---

## 它是什么？

它是一集合包含**最佳实践**的代码片段。
当你需要一个 "Button" 时，你不是 `npm install button`，而是运行一段命令，它直接把 `Button.tsx` 这个文件**复制**到你的项目里。

## 为什么它颠覆了游戏规则？

1. **你拥有源代码 (You own the code)**：
    * 以前用 Antd，想改个按钮圆角可能要覆盖 CSS 样式，很痛苦。
    * 现在，`Button.tsx` 就在你的文件夹里。想改？直接改源码。你是上帝。

2. **构建在 Headless 之上**：
    * 它的底层是 `Radix UI`，处理了所有复杂的交互（无障碍访问、键盘导航）。
    * 它的样式层是 [Tailwind CSS](wiki:wiki_tailwind_css)。
    * 它即使长得好看，又极度健壮。

3. **Vibe 极高**：
    * 它默认的设计极其现代、干净、黑白灰的高级感。
    * 它就是为 **Nest.js** 和 **Tailwind** 量身定做的。

## 怎么用？

```bash
npx shadcn@latest add button
```

就这一行命令。你的项目里就会多出一个漂亮的、可高度定制的按钮组件。

## Vibe 建议

不要手写模态框 (Modal)、下拉菜单 (Dropdown) 或 标签页 (Tabs)。这些很难写对（特别是在手机上）。
**直接用 Shadcn。**
把时间花在你的业务逻辑上，把 UI 细节交给 Shadcn。这是构建漂亮 App 的捷径。
