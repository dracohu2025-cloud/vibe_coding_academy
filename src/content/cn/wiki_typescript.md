---
title: "[[TypeScript]]"
phase: "wiki"
---

# TypeScript: 带安全带的 JavaScript

> "一旦你习惯了类型提示，裸写 JS 就像是在裸奔。"

**[[[[TypeScript]]]] (TS)** 是 JavaScript 的超集，由 Microsoft 开发。简单说，就是给 JS 加上了**类型 (Types)**。

---

## 为什么要给自己找麻烦？

初学者通常讨厌 [[[[TypeScript]]]]。"为什么我要写 `name: string`？我知道它是字符串啊！"

但当你写到项目第 1000 行时：

* **JS**：`user.nmae` (拼错了)。程序崩了。你需要 Debug 20 分钟去找这个拼写错误。
* **TS**：即时报错。"属性 'nmae' 不存在"。你 1 秒钟修好。

### 超能力：IntelliSense (智能提示)

这是使用 TS 的最大理由。
因为 TS 知道 `user` 有什么属性，当你打出 `user.` 时，编辑器会列出所有可用的属性。
你不需要去查文档，也不需要切回去看定义。**代码在告诉你怎么写它自己。**

## 怎么学？

不要试图学会所有的高级类型（泛型、Utility Types）。
你只需要学会：

1. **Primitives**: `string`, `number`, `boolean`.
2. **Arrays**: `string[]`.
3. **Interfaces**: 定义对象形状。

```typescript
interface User {
  id: number;
  name: string;
  isVip?: boolean; // ? 表示可选
}
```

## Vibe 建议

**AnyScript 是不可接受的**。
不要遇到报错就写 `any`。这违背了使用 TS 的初衷。
如果实在不知道写什么类型，问 AI："Hey，这段数据的 Interface 应该是怎么样的？"
AI 写 TS 类型定义比人类强 100 倍。
