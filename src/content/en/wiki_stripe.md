---
title: "Stripe"
phase: "build"
---

# Stripe

## 1. What is Stripe? (The Financial Infrastructure)

If [[OpenRouter]] is the Visa of AI, **[[Stripe]]** is the cash register of the internet.
It's not just a payment gateway; it is the **financial infrastructure platform for the internet**.

For developers, [[Stripe]] means one thing: **Elegance**.
No complex banking protocols, no ancient XML interfaces. Just clean, modern, type-safe APIs.

---

## 2. Why Choose It?

* **DX (Developer Experience)**: Its documentation is the industry standard. Its SDK (`stripe-node`) is a work of art.
* **Global Reach**: One line of code supports 135+ currencies, Alipay, WeChat Pay, Apple Pay, and more.
* **Beyond Payments**: Subscriptions (Billing), Invoices, Tax, and even Company Incorporation (Atlas).
* **Testing Friendly**: A perfect Test Mode allows you to simulate the entire flow without spending real money.

---

## 3. Key Concepts

* **PaymentIntent**: Not just a "payment", but a state machine (Processing, Succeeded, Failed).
* **Checkout**: Targeted payment page. The fastest way to integrate, no need to build frontend UI.
* **Elements**: Embeddable UI components. Use this if you want the payment form to look exactly like your App.
* **Webhook**: Server-to-server whispers. When a payment succeeds, [[Stripe]] pings your server: "Hey, money received, ship the goods."

---

## 4. Vibe Best Practices

### The Savior: Stripe CLI

Don't try to test Webhooks by deploying constantly. Use the [[Stripe]] CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

It forwards real (or simulated) events to your `localhost`. This is essential for backend development.

### Idempotency

The network is unreliable. What if [[Stripe]] sends the Webhook twice?
Ensure your logic is **idempotent**. For example, record the `stripe_event_id` in your database. If strictly seen before, return 200 immediately.

### Type Safety

Using it in [[Next.js]]:

```typescript
import [[Stripe]] from 'stripe';
const stripe = new [[Stripe]](process.env.STRIPE_SECRET_KEY!);
```

With [[TypeScript]], you will never misspell a parameter name.
