---
title: "Supabase"
phase: "wiki"
---

# Supabase: The Weekend Project Miracle

> "Open Source Firebase alternative? No, it's Postgres with superpowers."

**Supabase** is a Backend-as-a-Service (BaaS). Simply put: It gives you everything a full backend team would provide—Database, Auth, Storage, Realtime subscriptions.

---

## Why is it core to Vibe Coding?

1. **Postgres Integrity**:
    * Supabase is just a nice wrapper around **Postgres**, the world's most robust open-source database.
    * You are not "Vendor Locked". If you want to leave later, just dump your SQL and go.

2. **Instant Auth**:
    * Do you want to write "Sign Up / Login / Forgot Password / Email Verification" yourself? No. That is hell.
    * Supabase handles it all. "Sign in with Google"? Just a checkbox.

3. **Realtime**:
    * Building a chat app?
    * Listen to database changes. When a row is inserted, your frontend gets notified instantly. This used to require complex WebSocket infrastructure.

## Usage with Next.js

With [Next.js](wiki:nextjs) and Supabase, you are Full Stack.

* **Frontend**: Shadcn for UI.
* **Backend**: Next.js Server Actions for logic.
* **Data**: Supabase for storage.

One person, one army.

## Vibe Advice

Don't query the database directly from the client (you can, but careful).
**Always use RLS (Row Level Security)**. This is Supabase's killer feature—you define rules at the database level: "Users can only see their own data."

Sign up for a free tier. For your first 10,000 users, you probably won't pay a dime.
