---
title: "[[Tailwind CSS]]"
phase: "wiki"
---

# [[Tailwind CSS]]: Air and Water of Modern Web

> "If you are still writing class='wrapper' and then go to a CSS file to type .wrapper { display: flex }, you are stuck in 2015."

**[[Tailwind CSS]]** is a "Utility-First" CSS framework. It doesn't give you pre-built components (like buttons or navbars); it gives you low-level building blocks (Utilities) to build exactly what you want, directly in your HTML.

---

## Why use it?

### 1. It is "Atomic"

Traditional CSS is like oil painting; you mix colors and plan composition. It's slow.
Tailwind is like LEGO. You want a red, rounded, shadowed button?

```html
<button class="bg-red-500 rounded-lg shadow-md p-4 text-white">
  Click me
</button>
```

You never leave your HTML. You never have to invent awkward names like `red-button-wrapper-final`.

### 2. It is a Design System

Tailwind defines what is "red" (red-500) and what is "large" (text-xl).
This ensures your site doesn't have 50 slightly different shades of red or random pixel values. It forces you to create beauty within **constraints**.

### 3. It is Responsive Magic

Want a column layout on mobile but a row on desktop?

```html
<div class="flex flex-col md:flex-row">
  <!-- Column on mobile, Row on iPad (md) and up -->
</div>
```

This is pure magic.

## Vibe Advice

Beginners might think the HTML looks ugly (too many classes).
**Endure it.**
After a week, you will realize you can never go back to standard CSS. Your development speed will increase 10x.

**VS Code Extension**: Must install `[[Tailwind CSS]] IntelliSense`. It helps you autocomplete all the classes.
