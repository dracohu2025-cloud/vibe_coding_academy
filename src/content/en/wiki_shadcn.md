---
title: "Shadcn/UI"
phase: "wiki"
---

# Shadcn/UI: Not a Library, A Secret Weapon

> "Give ownership to the builder."

**[[Shadcn/UI]]** (pronounced like "Shad-cn") is the biggest frontend phenomenon of 2024-2025. But it is **NOT** a component library, nor an npm package like Material UI.

---

## What is it?

It is a collection of **best-practice** code snippets.
When you need a "Button", you don't `npm install button`. You run a command, and it physically **copies** the `Button.tsx` file into your project folder.

## Why is it a Game Changer?

1. **You Own the Code**:
    * With traditional libraries, customizing a button means fighting with CSS overrides.
    * With Shadcn, the component file is right there. Want to change the border radius? Edit the code. You are God.

2. **Built on Headless**:
    * It sits on top of `Radix UI`, which handles all the hard interactions (Accessibility, Keyboard navigation).
    * It operates with [Tailwind CSS](wiki:wiki_tailwind_css) for styling.
    * It is beautiful by default, but rock-solid internally.

3. **High Vibe**:
    * The default design is incredibly modern, clean, and premium.
    * It is tailor-made for **[[Next.js]]** and **Tailwind**.

## How to use?

```bash
npx shadcn@latest add button
```

Just one command. And boom, a beautiful, fully customizable Button component is in your project.

## Vibe Advice

Do not try to build your own Modals, Dropdowns, or Tabs from scratch. It's pointless pain.
**Use Shadcn.**
Spend your time on your unique idea, and let Shadcn handle the UI details. This is the cheat code for building good-looking apps.
