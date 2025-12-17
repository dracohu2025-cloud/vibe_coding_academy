---
title: "Vercel"
phase: "build"
---

# Vercel

## 1. 什么是 Vercel? (The Frontend Cloud)

如果说 [[Next.js]] 是屠龙刀，那 **[[Vercel]]** 就是握刀的那只手。
它是 **Frontend Cloud** 的定义者，也是 [[Next.js]] 的创造者。

在 Vibe Coding 的世界里，部署代码不应该是一件需要"运维"的事情。
它应该像保存文件一样简单。
**[[Vercel]] 让这一切变成了现实：Push to Git = Deploy.**

---

## 2. 核心魔法 (Core Magic)

### DX (Developer Experience) 极致体验

* **Zero Config**: 不需要写 `nginx.conf`，不需要配置 Dockerfile。只要你的项目里有 `package.json`，它就知道该怎么跑。
* **Preview Deployments**: 这是团队协作的杀手锏。你每一次提交代码（Pull Request），[[Vercel]] 都会自动生成一个**独立的预览网址**。你的产品经理、设计师可以直接点击链接查看效果，而不用等你合并到主分支。

### 性能怪兽

* **Edge Network**: 它的 CDN 遍布全球。你的静态资源会自动缓存到离用户最近的地方。
* **Serverless Functions**: 你的后端 API 会自动变成 Serverless 函数。按次计费，无限扩容，没有冷启动烦恼（几乎）。

---

## 3. Vibe 最佳实践

### 配合 Next.js

这是原配。
在 [[Vercel]] 上部署 [[Next.js]]，你会获得 **ISR (增量静态再生)**、**Image Optimization (图片自动优化)** 等所有高级特性。

### 环境变量管理

不要把 `.env` 提交到 GitHub。
在 [[Vercel]] 的 Dashboard 里配置环境变量。它支持 Development, Preview, Production 三套独立的环境变量，非常科学。

### 只有两个字：快

Vibe Coding 讲究的是**心流**。
当你写完代码，`git push`，然后喝口水。20秒后，全世界都能看到你的作品。
这种**即时反馈**的快感，只有 [[Vercel]] 能给你。

---

## 4. 常见误区

* **"它太贵了"**: 对于个人开发者和早期项目，它的 **Hobby Plan (免费版)** 极其慷慨。足够你用到拿到 A 轮融资。
* **"它是静态托管"**: 错。它支持完整的全栈部署 (SSR, Serverless API, Edge Middleware)。

---

> "Develop. Preview. Ship." —— 这不仅仅是口号，这是 Vibe Coding 的生活方式。
