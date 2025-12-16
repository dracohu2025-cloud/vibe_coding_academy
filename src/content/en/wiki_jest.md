---
title: "[[Jest/Vitest]]"
phase: "wiki"
---

# Jest / Vitest: The Bodyguards

> "Code without tests is a ticking time bomb."

**Jest** and **Vitest** are the most popular testing frameworks. They are "code that tests your code".

---

## Why test?

Imagine you fixed a small styling bug, but accidentally broke the Login button. You deployed it. Disaster.
If you had tests, the script would run before you deploy:

* ❌ Login failed.

It saves your life.

## Jest vs Vitest

* **Jest**: The King, by Facebook. Massive ecosystem. A bit slow to configure.
* **Vitest**: The Challenger. Built on Vite. **Blazing Fast**. Compatible with Jest syntax.

For modern **[Next.js](wiki:wiki_next_js)** and Vite projects, **Vitest** is the Vibe.

## How to use?

You don't need to test every single line.
**Test the Happy Path.**
Example: "Input username/password -> Click Login -> Should redirect to Home".

## Vibe Advice

As a Rookie, you might feel overwhelmed just writing the app.
Fair enough.
But remember, **Unit Tests** let you sleep at night.
At least try to write one simple test. The dopamine hit from seeing "✅ All Tests Passed" is addictive.
