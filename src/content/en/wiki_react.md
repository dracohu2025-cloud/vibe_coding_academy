---
title: "React"
phase: "wiki"
---

# React: The Lingua Franca of Web

> "Write once, run everywhere?" No, [[React]] is "Learn once, write anywhere."

In 2025, **[[React]]** is not just a JavaScript library; it is the de facto standard of Web Development. If you ask "Which frontend framework should I learn?", the answer is 90% likely to be [[React]] and its ecosystem.

---

## What is React?

[[React]] is a JavaScript library for building user interfaces, developed by Facebook (Meta).

Its core idea is **Components**:
Like building with LEGOs, you break a complex page into independent, reusable pieces (Buttons, Navbars, Cards) and assemble them together.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Why did React win?

1. **Virtual DOM**:
    * [[React]] doesn't touch the heavy DOM directly. It maintains a virtual tree in memory.
    * When data changes, it compares the new tree with the old one, calculates the minimum difference, and updates only what's needed. This is called **Reconciliation**.
    * *Sound complex?* Just know: **It's fast.**

2. **One-way Data Flow**:
    * Data flows like a waterfall, from parent components to children. This makes the data flow predictable and easy to debug.

3. **Hooks**:
    * [[React]] 16.8 introduced Hooks (`useState`, `useEffect`), changing the game forever. They allow you to write complex logic with simple functions.

    ```jsx
    // This line gives your component "memory"
    const [count, setCount] = useState(0); 
    ```

## React in 2025

Today, we rarely write "Vanilla [[React]]" directly. We usually use a **Web Framework**, with [[React]] as the core engine.

* **[Next.js](wiki:wiki_next_js)**: The official production framework recommended by [[React]]. It handles routing, rendering (SSR), and API routes for you.
* **[[React]] Server Components (RSC)**: The latest paradigm. Components can run directly on the server, read from the database, and send the result to the browser. The line between frontend and backend is blurring.

## Vibe Advice

Don't bother learning class components and lifecycles like `componentDidMount`. Those are ancient relics.
Embrace **Function Components + Hooks**.
Start directly with **[[Next.js]]**.

[[React]] is your lightsaber. Hold it tight.
