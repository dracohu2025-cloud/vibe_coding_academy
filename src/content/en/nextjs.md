# The Core Engine: Next.js (App Router)

> "In 2025, we don't code `divs` by hand. We orchestrate components."

[[React]] is a library. [[Next.js]] is a **Framework**. In the philosophy of Vibe Coding, we never invent the wheel. We stand on the shoulders of giants to achieve the coolest results with the least amount of code.
[[Next.js]] 15+ (App Router) is currently the **only correct answer** for building Web Applications on this planet.

---

## 1. The Paradigm Shift: App Router

If you are still using `create-react-app` or the `pages/` directory, stop immediately. That is archaeology.

### Why App Router?

* **Server Components by Default (RSC)**: This is a game changer. Your components run on the **Server** by default. This means you can connect directly to the database without writing API endpoints.
* **Zero Client JS**: Server-rendered components send pure HTML to the browser. Only when you need interaction (clicks, inputs) do you use `'use client'`. This results in **extreme initial load speed**.

### Directory Structure (The Vibe Way)

Don't clutter your files. Follow this sacred structure:

```text
src/
  app/
    layout.tsx      # Global Layout (Fonts, Metadata)
    page.tsx        # Home Page
    (auth)/         # Route Group (Hidden from URL)
      login/
        page.tsx
    dashboard/
      layout.tsx    # Dashboard Layout (Sidebar)
      page.tsx
  components/
    ui/             # Shadcn Basic Components (Button, Input)
    feature/        # Business Components (LoginForm, DashboardChart)
  lib/              # Utilities (db.ts, utils.ts)
```

---

## 2. Data Fetching: Goodbye `useEffect`

Before 2024, fetching data was a nightmare: `useEffect` -> `fetch` -> `setLoading` -> `setData`.
Now, it is the art of **Sync**:

```tsx
// This is a Server Component (Default)
import { db } from "@/lib/db";

export default async function ProfilePage() {
  // Direct Database Query! No API, No Loading State.
  // Notice the `await` keyword.
  const user = await db.user.findFirst();

  return (
    <main>
      <h1>Hello, {user.name}</h1>
    </main>
  );
}
```

**Vibe Tip**:

* This is why AI Code Gen is so powerful in the App Router era. Because the logic is linear and simple. Claude Opus doesn't need to manage complex [[React]] lifecycles; it just writes an async function.

---

## 3. Interaction: Server Actions

Submitting a form used to require `POST /api/submit`, JSON parsing, CORS handling...
Now? You just need a function.

```tsx
// actions.ts
'use server' // The Magic Spell

export async function updateName(formData: FormData) {
  const name = formData.get("name");
  await db.user.update({ data: { name } });
}
```

Then call it directly from your component `form action={updateName}` or `onClick`. It feels like calling a local function. [[Next.js]] handles all the networking and serialization behind the scenes.

---

## 4. The UI Endgame: Shadcn/UI & v0

You are not a UI Designer, and you don't need to be.

* **[[Tailwind CSS]]**: The primitive. Don't write `.css` files. Direct `class="flex justify-center"`. It's muscle memory.
* **shadcn/ui**: It's not a library; it's **copy-paste code**. When you install a component, it puts the code into your `src/components/ui` folder. You own it. You can modify it.
* **v0.dev (AI UI)**: This is your Ultimate Move.
    1. Open v0.dev.
    2. Prompt: "Design a cyberpunk login form with glassmorphism background."
    3. Copy the generated [[React]] code.
    4. Paste into your project.
    5. Log off.

---

## Summary

[[Next.js]] (App Router) combined with [[Shadcn/UI]] allows you to do the work of a frontend team in 2 days.
This is the core of **Vibe Coding**: **Speed of Light Construction, Maximum Elegance**.
