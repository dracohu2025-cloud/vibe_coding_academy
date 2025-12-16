---
title: "Next.js"
phase: "wiki"
---

# Next.js: React 的完全体

> 如果 [[React]] 是引擎，[[Next.js]] 就是整辆赛车。

**[[Next.js]]** 是目前构建 Web 应用的首选框架。它构建在 [React](wiki:wiki_react) 之上，提供了开发生产级应用所需的一切"开箱即用"的功能。

---

## 为什么不能只用 React？

纯 [[React]] 只是一个 UI 库。当你只用 [[React]] 时，你需要自己决定：

* 怎么做路由跳转？(Route)
* 怎么打包代码？(Bundling)
* 怎么做 SEO？(SSR)
* 怎么写后端 API？(Backend)

[[Next.js]] 把这些都帮你做好了。

## Next.js 的超能力

1. **混合渲染 (Hybrid Rendering)**：
    * **CSR (Client Side Rendering)**: 传统的 SPA 模式，浏览器渲染。
    * **SSR (Server Side Rendering)**: 服务器渲染好 HTML 再发给浏览器。SEO 友好，首屏极快。
    * 你可以在一个应用里混合使用这两种模式。

2. **App Router**:
    * 基于文件系统的路由。
    * 只要你在 `app/` 目录下创建一个 `page.tsx`，它就自动变成了一个网页。不需要写复杂的路由配置。

3. **Server Actions**:
    * 在组件里直接写个函数就能操作数据库。
    * 不需要写 API Endpoint，不需要 fetch。就像调用本地函数一样调用后端逻辑。

    ```tsx
    // server-side code
    async function createPost(formData) {
      'use server'
      await db.post.create(...)
    }
    ```

## Vercel

[[Next.js]] 是由 **Vercel** 公司开发的。
Vercel 是目前最好的前端部署平台。把你的 [[Next.js]] 代码推送到 GitHub，Vercel 就会自动部署，并分配一个全球 CDN 加速的网址。

## Vibe 建议

在 2025 年，**[[Next.js]] 就是全栈开发的标准答案**。
不论你是做个人博客，还是做 SaaS 产品，[[Next.js]] 都能胜任。配合 [[Tailwind CSS]] 和 Shadcn UI，你简直无人能挡。
