---
title: "[[Next.js]]"
phase: "wiki"
---

# [[Next.js]]: The Complete Form of [[React]]

> If [[React]] is the engine, [[Next.js]] is the race car.

**[[Next.js]]** is the premier framework for building Web applications today. Built on top of [React](wiki:wiki_react), it provides everything you need to build production-grade apps "out of the box".

---

## Why not just [[React]]?

Pure [[React]] is just a UI library. When you use only [[React]], you have to decide:

* How to handle routing? (Route)
* How to bundle code? (Bundling)
* How to handle SEO? (SSR)
* How to write backend APIs? (Backend)

[[Next.js]] handles all of this for you.

## [[Next.js]] Superpowers

1. **Hybrid Rendering**:
    * **CSR (Client Side Rendering)**: Traditional SPA mode, browser renders everything.
    * **SSR (Server Side Rendering)**: Server renders HTML and sends it to the browser. Great for SEO and fast initial load.
    * You can mix these modes in a single app.

2. **App Router**:
    * File-system based routing.
    * Just create a `page.tsx` inside the `app/` directory, and it automatically becomes a webpage. No complex router config needed.

3. **Server Actions**:
    * Write a function inside your component to mutate data directly.
    * No API endpoints, no manual fetch. Call backend logic like a local function.

    ```tsx
    // server-side code
    async function createPost(formData) {
      'use server'
      await db.post.create(...)
    }
    ```

## Vercel

[[Next.js]] is developed by **Vercel**.
Vercel is the best frontend deployment platform. Push your [[Next.js]] code to GitHub, and Vercel automatically deploys it with a global CDN.

## Vibe Advice

In 2025, **[[Next.js]] is the default answer for Full Stack**.
Whether you are building a personal blog or a SaaS product, [[Next.js]] can handle it. Paired with [[Tailwind CSS]] and Shadcn UI, you are unstoppable.
