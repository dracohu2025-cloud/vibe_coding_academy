---
title: "[[Vue]]"
phase: "wiki"
---

# [[Vue]].js: The Progressive Framework

> "You don't need to understand it fully to start using it."

**[[Vue]].js** (pronounced /vjuː/, like view) was created by Evan You. It is famous for being "Easy to Learn" and having "Template Syntax". It has massive market share in Asia.

---

## Why is it a Vibe Coding Alternative?

Although we recommend **[React](wiki:wiki_react)**, [[Vue]] is still an excellent choice, especially for solo developers.

### 1. The Template Syntax

[[Vue]] uses HTML-like templates:

```html
<div v-if="seen">Now you see me</div>
<button @click="count++">Click me</button>
```

Compared to [[React]]'s JSX (HTML in JS), [[Vue]] feels more intuitive, like writing supercharged HTML.

### 2. Two-way Binding

When dealing with forms, [[Vue]]'s `v-model` is magic. You don't need to write tedious `onChange` handlers like in [[React]].

### 3. Single File Component (SFC)

[[Vue]]'s `.vue` file perfectly encapsulates HTML, CSS, and JS:

```html
<template>...</template>
<script>...</script>
<style>...</style>
```

This structure is incredibly clean and organized.

## If it's so good, why not #1?

1. **[[TypeScript]] Support**: [[Vue]] 3 is vastly improved, but [[React]]'s TS support is native and perfect. [[Vue]] requires some "gymnastics".
2. **Ecosystem**: [[React]] Native, [[Next.js]], Vercel... the world revolves around [[React]].
3. **AI Generation**: Current AI tools (like v0.dev) generate much better [[React]]/Shadcn code than [[Vue]] code.

## Vibe Advice

If your job forces you to use [[Vue]], **don't be sad. It's great.**
If you are a freelancer building a small tool in a weekend, [[Vue]] might be faster to start.
But if you want to conquer the world, **stick to [React](wiki:wiki_react)**.
