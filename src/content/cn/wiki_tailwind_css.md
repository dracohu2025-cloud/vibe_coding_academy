---
title: "Tailwind CSS"
phase: "wiki"
---

# Tailwind CSS: 现代 Web 的空气和水

> "如果你还在写 class='wrapper' 然后去 css 文件里写 .wrapper { display: flex }，那你还活在 2015 年。"

**[[Tailwind CSS]]** 是一个 "Utility-First"（原子化优先）的 CSS 框架。它不提供现成的组件（比如按钮、导航栏），而是提供了一堆小积木（Utilities），让你直接在 HTML 里拼出任何你想要的样子。

---

## 为什么要用它？

### 1. 它是 "原子" (Atomic)

传统的 CSS 像是在画油画，你得调色、构图，很慢。
Tailwind 像是乐高积木。你想要一个红色的、圆角的、带阴影的按钮？

```html
<button class="bg-red-500 rounded-lg shadow-md p-4 text-white">
  Click me
</button>
```

你不需要离开 HTML 文件，不需要给这堆样式起个尴尬的名字（比如 `red-button-wrapper`）。

### 2. 它是设计系统的基石

Tailwind 帮你定义好了什么是 "红"（red-500），什么是 "大"（text-xl）。
这保证了你的网站不会有 50 种不同的红色，也不会有 100 种乱七八糟的字体大小。它强制让你在**约束**中创造美。

### 3. 它是响应式的神器

想在手机上竖排，电脑上横排？

```html
<div class="flex flex-col md:flex-row">
  <!-- 手机上是 column，iPad (md) 以上是 row -->
</div>
```

这就是魔法。

## Vibe 建议

初学者可能会觉得 HTML 变得很丑（class 太多）。
**忍受它。**
当你写了一个星期后，你会发现你再也回不去写普通 CSS 的日子了。你的开发速度会提升 10 倍。

**配合 VS Code 插件**：一定要安装 `[[Tailwind CSS]] IntelliSense`，它会智能提示所有的 class。
