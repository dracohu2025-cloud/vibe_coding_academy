---
title: "[[Claude 4.5]]"
phase: "wiki"
---

# [[Claude 4.5]] Sonnet: 逻辑怪兽

> "如果是 Gemini 是艺术家，[[Claude 4.5]] 就是最严谨的架构师。"

Anthropic 发布的 **[[Claude 4.5]] Sonnet** 是目前地球上逻辑推理能力最强的 AI 模型。在复杂的后端逻辑、算法优化和系统架构设计上，它也是无敌的存在。

## 核心特性

### 1. 扩展思维 (Extended Thinking)

这是 [[Claude 4.5]] 的杀手锏。在回答你复杂的代码问题前，它会先进入 "Thinking" 模式。
它会像人类一样打草稿：

1. "用户想实现这个功能..."
2. "这里有个潜在的并发 Bug..."
3. "最好使用 Redis 锁来解决..."
4. "不仅要解决问题，还要保证扩展性..."
这种思维链（Chain of Thought）让它几乎不会写出有逻辑漏洞的代码。

### 2. 也是最强的 Code Reviewer

把它集成到你的 CI/CD 里。
它能发现人类 Reviewer 经常忽略的竞态条件（Race Conditions）和安全漏洞。

### 3. 听话 (Steerability)

它最听劝。如果你在 `.cursorrules` 里定义了 "必须用 [[TypeScript]] 强类型"，它绝对不会给你写一个 `any`。

## 最佳食用方法

* **场景**: 写复杂的后端业务逻辑、数据库设计、重构老代码。
* **Prompt 技巧**: 给它足够的时间思考。告诉它："Take your time, think step by step."

## 评价

**"它写出的代码，直接就可以上线。"**
