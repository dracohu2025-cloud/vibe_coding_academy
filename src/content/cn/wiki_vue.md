---
title: "Vue"
phase: "wiki"
---

# Vue.js: 优雅的渐进式框架

> "你不需要完全理解它，就能开始使用它。"

**[[Vue]].js** (读音 /vjuː/，类似 view) 是由尤雨溪 (Evan You) 创造的前端框架。它以"易学"和"模板语法"著称，在亚洲地区拥有极高的市场占有率。

---

## 为什么它是 Vibe Coding 的备选？

虽然我们推荐 **[React](wiki:wiki_react)**，但 [[Vue]] 依然是一个极佳的选择，特别是对于独立开发者。

### 1. 模板语法 (The Template)

[[Vue]] 使用类似 HTML 的模板语法：

```html
<div v-if="seen">现在你看到我了</div>
<button @click="count++">点击我</button>
```

相比于 [[React]] 的 JSX (JS 里的 HTML)，[[Vue]] 的写法更符合直觉，像是在写增强版的 HTML。

### 2. 双向绑定 (Two-way Binding)

在处理表单 `input` 时，[[Vue]] 的 `v-model` 是魔法般的存在。你不需要像 [[React]] 那样写 tedious 的 `onChange` 处理函数。

### 3. 单文件组件 (SFC)

[[Vue]] 的 `.vue` 文件将 HTML, CSS, JS 完美封装在一个文件里：

```html
<template>...</template>
<script>...</script>
<style>...</style>
```

这种结构非常清晰，治好了很多人的"代码强迫症"。

## 既然这么好，为什么不是首选？

1. **[[TypeScript]] 支持**：虽然 [[Vue]] 3 改观了很多，但 [[React]] 的 TS 支持是原生的、完美的。[[Vue]] 需要一些"体操"。
2. **生态系统**：[[React]] Native, [[Next.js]], Vercel... 整个世界都在围绕 [[React]] 旋转。
3. **AI 代码生成**：目前的 AI (如 v0.dev) 对 [[React]]/Shadcn 的生成质量远高于 [[Vue]]。

## Vibe 建议

如果你在公司被迫使用 [[Vue]]，**别难过，它很棒**。
如果你是自由职业者，只有一两天时间做一个小工具，[[Vue]] 可能比 [[React]] 更快上手。
但如果你想征服世界，**坚持 [React](wiki:wiki_react)**。
