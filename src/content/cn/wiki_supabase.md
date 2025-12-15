---
title: "Supabase"
phase: "wiki"
---

# Supabase: 你的周末项目神器

> "Firebase 的开源替代品？不，它是 Postgres 的超能力版。"

**Supabase** 是一个后端即服务 (BaaS) 平台。简单说：它给你提供了一个完整的后端团队能提供的一切——数据库、用户登录、文件存储、即时推送。

---

## 为什么它是 Vibe Coding 的核心？

1. **Postgres 是基石**：
    * Supabase 只是一个漂亮的皮肤，它的底下是世界上最强大的开源数据库 **Postgres**。
    * 这意味着你没有被 "平台锁定"。如果你以后想换云，把数据库导出带走就行。

2. **Authentication (用户系统)**：
    * 你想自己写 "注册/登录/忘记密码/发送邮件" 吗？不，你不想。那是地狱。
    * Supabase 帮你做好了。如果你想支持 "Google 登录" 或 "GitHub 登录"，只要在后台打个钩。

3. **Realtime (实时)**：
    * 想做一个聊天室？
    * 监听数据库变化。一旦有人插入一条新消息，你的前端瞬间就能收到推送。这在以前需要写复杂的 WebSocket 代码。

## 怎么配合 Next.js 用？

有了 [Next.js](wiki:nextjs) 和 Supabase，你就是全栈。

* **前端**：用 Shadcn 画界面。
* **后端**：用 Next.js Server Actions 接收请求。
* **数据**：用 Supabase 存取数据。

你一个人，就是一个军队。

## Vibe 建议

不要在前端代码里直接查询数据库（虽然可以，但不安全）。
**总是使用 RLS (Row Level Security)**。这是 Supabase 的看家本领 —— 你可以在数据库层面规定："用户只能查看到自己的数据"。

注册一个免费账号。对于前 10,000 个用户，你一分钱都不用花。
