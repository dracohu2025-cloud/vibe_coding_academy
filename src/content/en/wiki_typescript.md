---
title: "[[TypeScript]]"
phase: "wiki"
---

# [[TypeScript]]: JavaScript with Safety Belts

> "Once you get used to IntelliSense, writing raw JS feels like running naked."

**[[TypeScript]] (TS)** is a superset of JavaScript developed by Microsoft. Simply put, it adds **Types** to JS.

---

## Why bother?

Beginners often hate TS initially. "Why do I have to type `name: string`? I know it's a string!"

But when your project hits 1000 lines:

* **JS**: You type `user.nmae`. App crashes at runtime. Debug for 20 mins.
* **TS**: Editor yells instantly: "Property 'nmae' does not exist". Fixed in 1 second.

### The Superpower: IntelliSense

This is the real reason.
Because TS knows what `user` is, when you type `user.`, the editor lists all properties.
You don't need to read docs. **The code tells you how to use it.**

## How to learn?

Don't panic about Generics or Advanced Types.
Just learn:

1. **Primitives**: `string`, `number`, `boolean`.
2. **Arrays**: `string[]`.
3. **Interfaces**: Describing objects.

```typescript
interface User {
  id: number;
  name: string;
  isVip?: boolean; // ? means optional
}
```

## Vibe Advice

**AnyScript is unacceptable.**
Do not type `any` just to shut up the error.
If you don't know the type, ask AI: "Hey, generate a TS interface for this JSON data."
AI is incredibly good at writing types for you.
