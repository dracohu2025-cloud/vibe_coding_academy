# 无形后端：Serverless 与云 (Serverless)

> "最好的服务器是**没有服务器**。"

当你是一个 Vibe Coder 时，你不应该花时间去配置 Nginx，去修补 Linux 内核漏洞，或者去担心数据库主从同步。
这些是**运维 (DevOps)** 的工作，而你的工作是**创造产品**。
欢迎来到 **Serverless (无服务器)** 架构。它不仅是免费的（对于起步来说），而且是无限扩展的。

---

## 1. 托管平台：Vercel

Vercel 不仅仅是 [[[[Next.js]]]] 的创造者，它是**前端的 AWS**。

* **GitOps**: 你只需要把代码推送到 GitHub。Vercel 会自动检测提交，自动构建，自动部署，自动生成预览链接。
* **全球 CDN**: 你的网站不是住在一台服务器上，而是住在全球 100+ 个边缘节点上。无论用户在伦敦还是东京，访问速度都一样快。
* **零服务器维护**: 没有 SSH，没有 `apt-get update`。如果网站挂了，那是 Vercel 的问题，不是你的问题（而 Vercel 几乎从不挂）。

---

## 2. 数据库：[[[[Supabase]]]] (The Postgres)

你是前端开发者，你需要数据库，但你不想学 SQL 配置。
**[[[[Supabase]]]]** 是 "Firebase 的开源替代品"，基于强大的 PostgreSQL。

* **Table Editor**: 像 Excel 一样在网页上管理你的数据。
* **Auth**: 自带用户注册、登录（Google, GitHub 登录），一行代码集成。
* **Realtime**: WebSocket 开箱即用。当数据变化时，你的网页自动更新（想想即时聊天应用）。
* **Edge Functions**: 可以在全球边缘运行的后端代码。

**Vibe 组合**：
[[[[Next.js]]]] (前端) + [[[[Supabase]]]] (数据库 & 认证)。这是 2025 年独立开发者的标准技术栈。

---

## 3. 缓存与队列：Upstash

当你的应用变大，你需要 Redis。
**Upstash** 是 Serverless 的 Redis。

* **Http API**: 你不需要复杂的 Redis 连接池，你可以像调用 API 一样调用 Redis。
* **按请求付费**: 如果没人访问你的网站，你一分钱都不用付。
* **QStash**: 强大的消息队列。用于处理后台任务（比如发送邮件，AI 图片生成进度）。

---

## 4. 2025 AI 时代的后端逻辑

传统的后端：
`Client -> API Server (Python/Java) -> Database`

Vibe Coding 后端：
`Client -> [[[[Next.js]]]] Server Actions -> [[[[Supabase]]]] / Upstash`

或者更激进：
`Client -> [[[[Supabase]]]] (通过 RLS 安全策略直接读写)`

AI (Claude/GPT) 极其擅长编写 **[[[[Supabase]]]] RLS (Row Level Security)** 策略。你只需要告诉它：“只允许用户读取自己的个人资料”，它就会写出完美的 SQL 策略。这让你甚至不需要写后端 API 就能构建安全的程序。

---

## 总结

拥有 Vercel + [[[[Supabase]]]] + Upstash，你就拥有了一个**不需要运维团队的 Google Cloud**。
它们都有慷慨的免费层 (Free Tier)，足够你运营一个拥有 10,000 日活用户的应用。
这就是**无形后端**的力量。你只关注业务逻辑，让云来处理其余的一切。
