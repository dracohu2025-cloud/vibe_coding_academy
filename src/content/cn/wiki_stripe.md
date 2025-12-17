---
title: "Stripe"
phase: "build"
---

# Stripe

## 1. 什么是 Stripe? (The Money Pipeline)

如果说 [[OpenRouter]] 是 AI 界的 Visa，那么 **[[Stripe]]** 就是互联网界的收银台。
它不仅仅是一个支付网关，它是**互联网的金融基础设施**。

对于开发者来说，[[Stripe]] 只有两个字：**优雅**。
没有复杂的银行协议，没有古老的 XML 接口。只有干净、现代、类型安全的 API。

---

## 2. 为什么选择它? (Why Stripe?)

* **DX (Developer Experience)**: 它的文档是行业标准。它的 SDK (`stripe-node`) 就像是艺术品。
* **全球化**: 一行代码，支持 135+ 种货币，支付宝、微信、Apple Pay 全包。
* **不仅仅是支付**: 订阅 (Billing)、发票 (Invoicing)、税务 (Tax)、甚至公司注册 (Atlas)。
* **测试友好**: 极其完善的 Test Mode，无需真金白银也能走通全流程。

---

## 3. 核心概念 (Key Concepts)

* **PaymentIntent**: 支付意图。不仅仅是"付款"，它包含了状态机（待处理、成功、失败）。
* **Checkout**: 托管的支付页面。最快集成方式，无需自己写前端 UI。
* **Elements**: 可嵌入的 UI 组件。如果你想让支付表单长得像你自己的 App，用这个。
* **Webhook**: 服务器之间的"悄悄话"。当用户付款成功后，[[Stripe]] 会主动 ping 你的服务器："嘿，钱到账了，给他发货吧。"

---

## 4. Vibe 最佳实践 (Best Practices)

### 本地开发的神器：Stripe CLI

不要试图通过不断部署来测试 Webhooks。使用 [[Stripe]] CLI：

```bash
stripe listen --forward-to localhost:3000/api/webhooks
```

它会把线上的真实事件（或者模拟事件）转发到你的 `localhost`。这是后端开发的救命稻草。

### 幂等性 (Idempotency)

网络是不可靠的。如果 [[Stripe]] 发了两次 Webhook 怎么办？
确保你的处理逻辑是**幂等**的。比如，在数据库里记录 `stripe_event_id`，如果发现处理过了，就直接返回 200。

### 类型安全

在 [[Next.js]] 中使用：

```typescript
import [[Stripe]] from 'stripe';
const stripe = new [[Stripe]](process.env.STRIPE_SECRET_KEY!);
```

配合 [[TypeScript]]，你永远不会拼错参数名。
