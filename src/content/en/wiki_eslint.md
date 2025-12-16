---
title: "ESLint"
phase: "wiki"
---

# ESLint: The Code Police

> "It doesn't just find bugs; it teaches you how to write better code."

**[[ESLint]]** is a tool for identifying and reporting patterns in JavaScript/TypeScript code. It's like a strict teacher standing behind you while you type.

---

## What does it do?

1. **Catch Stupid Errors**:
    * Defined a variable `user` but never used it? Error.
    * Tried to reassign a `const`? Error.
    * This prevents 50% of runtime bugs before you even run the code.

2. **Enforce Style**:
    * Some use semicolons, some don't? Some indent 2 spaces, some 4?
    * [[ESLint]] (with Prettier) enforces consistency.

3. **Teach Best Practices**:
    * Example: In [[React]], you forgot a dependency in `useEffect`.
    * `eslint-plugin-react-hooks` will yell at you.
    * It is essentially teaching you how to write [[React]] correctly.

## How to use?

In **Vibe Coding**, you mostly don't config it.
**[Next.js](wiki:wiki_next_js)** comes with [[ESLint]] configured.
If you see a **Red** or **Yellow** squiggly line in VS Code, **DO NOT IGNORE IT**. Hover over it. Listen to the teacher.

## Vibe Advice

**Zero Warning Policy**.
Don't let your console fill up with yellow warnings. If you see a warning, fix it.
Keeping code clean is part of the Vibe.
