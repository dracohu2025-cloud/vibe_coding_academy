---
title: "Velite"
phase: "content-layer"
---

# [[Velite]]

## 1. 什么是 [[Velite]]? (The "Aha!" Moment)

想象一下，你有一堆 Markdown 文件用来写博客，还有一堆 JSON 文件用来存配置。
在传统的 React/Next.js 开发中，你通常需要写一堆复杂的 `fs.readFileSync`，然后用 `gray-matter` 解析 Frontmatter，最后还要自己写 TypeScript 接口来保证类型安全。**一旦改了一个字段，整个项目到处报错。**

**[[Velite]] 就是你的"内容管家"。**
它就像是内容的"编译层"。你只需要告诉它："嘿，我的博客文章长这样（定义 Schema）"，它就会自动扫描你的文件，把它们转换成**类型完美的 JSON 数据**。你在代码里直接 `import { posts } from '@/velite'`，就像导入一个普通数组一样简单，而且还能享受完整的 IDE 自动补全！

它是 [[Contentlayer]] 的精神继承者，但更轻量、更现代、更稳健。

---

## 2. 为什么选择它? (Why should I care?)

*   **类型安全 (Type-Safe)**: 再也不用猜 `post.date` 是字符串还是 Date 对象了。Velite 使用 **Zod** schema，开发体验满分。
*   **轻量级 (Lightweight)**: 它的名字源自"罗马轻步兵" (Velites)，主打一个轻快。
*   **框架无关**: 虽然我们常在 Next.js 里用，但它输出的只是纯数据，随处可用。
*   **Contentlayer 的最佳替代**: Contentlayer 已经停止维护，Velite 是目前社区公认的最佳接班人。

---

## 3. 怎么用? (Step-by-Step)

### 第一步：安装

```bash
npm install velite -D
```

### 第二步：配置 (`velite.config.ts`)

在项目根目录创建一个配置文件。用 **Zod** 风格定义你的内容结构：

```typescript
import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post', // 数据名
  pattern: 'posts/**/*.md', // 文件位置
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug('posts'),
    date: s.isodate(),
    content: s.markdown() // 自动编译 Markdown
  })
})

export default defineConfig({
  collections: {
    posts
  }
})
```

### 第三步：运行与集成

在 `package.json` 里把 velite 加入构建流程：

```json
"scripts": {
  "dev": "velite dev & next dev",
  "build": "velite build && next build"
}
```

### 第四步：在代码里直接用

```tsx
import { posts } from '#site/content' // 或者是你配置的别名

export default function BlogPage() {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
  )
}
```

---

## 4. Vibe Tips (最佳实践)

*   **配合 [[MDX]]**: Velite 对 MDX 的支持非常好。如果你的博客需要嵌入 React 组件，记得在 schema 里使用 `s.mdx()`。
*   **别名配置**: 推荐在 `tsconfig.json` 里配置 `@/velite`: `[".velite"]`，这样导入更优雅。
*   **热更新**: 运行 `velite dev` 时，修改 Markdown 文件，网页会瞬间热更新，写作体验极佳。
