---
title: "Velite"
phase: "content-layer"
---

# [[Velite]]

## 1. What is [[Velite]]? (The "Aha!" Moment)

Imagine you have a pile of Markdown files for your blog and some JSON files for config.
In traditional React/Next.js development, you'd usually write messy `fs.readFileSync` calls, parse Frontmatter with `gray-matter`, and manually write TypeScript interfaces to match. **If you change one field, your app breaks silently.**

**[[Velite]] is your "Content Butler".**
It acts as a "compilation layer" for your content. You simply tell it: "Hey, my blog posts look like this (Schema)," and it automatically scans your files and transforms them into **perfectly typed JSON data**. You can then just `import { posts } from '@/velite'` in your code, exactly like importing a regular array, complete with IDE autocompletion!

It is the spiritual successor to [[Contentlayer]], but lighter, more modern, and more robust.

---

## 2. Why should I care?

* **Type-Safe**: No more guessing if `post.date` is a string or a Date object. Velite uses **Zod** schemas for a top-tier developer experience.
* **Lightweight**: Named after Roman light infantry ("Velites"), it's fast and agile.
* **Framework Agnostic**: While popular with Next.js, it outputs pure data, so it works anywhere.
* **Contentlayer Replacement**: With Contentlayer unmaintained, Velite is the community-chosen successor.

---

## 3. Step-by-Step

### Step 1: Install

```bash
npm install velite -D
```

### Step 2: Configure (`velite.config.ts`)

Create a config file in your root. Define your content structure using **Zod** style:

```typescript
import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post', // Data name
  pattern: 'posts/**/*.md', // File location
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug('posts'),
    date: s.isodate(),
    content: s.markdown() // Auto-compile Markdown
  })
})

export default defineConfig({
  collections: {
    posts
  }
})
```

### Step 3: Run & Integrate

Add velite to your build scripts in `package.json`:

```json
"scripts": {
  "dev": "velite dev & next dev",
  "build": "velite build && next build"
}
```

### Step 4: Use it in Code

```tsx
import { posts } from '#site/content' // Or your configured alias

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

## 4. Vibe Tips (Best Practices)

* **Use with [[MDX]]**: Velite supports MDX perfectly. If you need React components in your blog, use `s.mdx()` in your schema.
* **Alias Config**: Configure `@/velite`: `[".velite"]` in your `tsconfig.json` for cleaner imports.
* **Hot Reload**: When running `velite dev`, changing a Markdown file triggers an instant hot reload. It's a joy to write with.
