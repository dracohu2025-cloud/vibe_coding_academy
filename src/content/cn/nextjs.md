# 核心引擎：Next.js (App Router)

> "2025 年，我们不再手写 `div`。我们编排组件。"

[[React]] 是库，而 [[Next.js]] 是**框架**。在 Vibe Coding 的哲学中，我们从不从零开始造轮子。我们站在巨人的肩膀上，用最少的代码实现最酷的效果。
[[Next.js]] 15+ (App Router) 是目前星球上构建 Web 应用的**唯一标准答案**。

---

## 1. 思维转变：App Router

如果你还在用 `create-react-app` 或 `pages/` 目录，请立刻停止。那已经是考古学了。

### 为什么是 App Router?

* **默认服务端渲染 (RSC)**：这是游戏规则的改变者。默认情况下，你的组件在**服务器**上运行。这意味着你可以直接连接数据库，而不需要写 API 接口。
* **零客户端 JS**：服务器渲染的组件发送给浏览器的是纯 HTML。只有当你需要交互（点击、输入）时，才使用 `'use client'`。这意味着极致的**首屏加载速度**。

### 目录结构 (The Vibe Way)

不要乱放文件。遵循这个神圣的结构：

```text
src/
  app/
    layout.tsx      # 全局布局 (字体, Metadata)
    page.tsx        # 首页
    (auth)/         # 路由组 (URL中不显示)
      login/
        page.tsx
    dashboard/
      layout.tsx    # 仪表盘专用布局 (侧边栏)
      page.tsx
  components/
    ui/             # Shadcn 基础组件 (Button, Input)
    feature/        # 业务组件 (LoginForm, DashboardChart)
  lib/              # 工具函数 (db.ts, utils.ts)
```

---

## 2. 数据获取：告别 `useEffect`

在 2024 年之前，获取数据是一场噩梦：`useEffect` -> `fetch` -> `setLoading` -> `setData`。
现在，它是**同步**的艺术：

```tsx
// 这是一个 Server Component (默认)
import { db } from "@/lib/db";

export default async function ProfilePage() {
  // 直接查询数据库！没有 API，没有 Loading 状态管理。
  // 注意 `await` 关键字。
  const user = await db.user.findFirst();

  return (
    <main>
      <h1>Hello, {user.name}</h1>
    </main>
  );
}
```

**Vibe 提示**：

* 这就是为什么我们说 AI Code Gen 在 App Router 时代更强大。因为它逻辑简单，Claude Opus 不需要处理复杂的 [[React]] 生命周期，它只需要写一个 async 函数。

---

## 3. 交互：Server Actions

提交表单曾经需要你写 `POST /api/submit`，处理 JSON，处理跨域...
现在？你只需要一个函数。

```tsx
// actions.ts
'use server' // 魔法咒语

export async function updateName(formData: FormData) {
  const name = formData.get("name");
  await db.user.update({ data: { name } });
}
```

然后在你的组件里直接调用它。就像调用一个本地函数一样。[[Next.js]] 处理了背后所有的网络请求和序列化。

---

## 4. UI 的终局：Shadcn/UI & v0

你不是 UI 设计师，你也不需要是。

* **[[Tailwind CSS]]**：这是原语。不要写 `.css` 文件。直接写 `class="flex justify-center"`。这是肌肉记忆。
* **shadcn/ui**：它不是组件库，它是**代码片段**。当你安装一个组件，它直接把代码复制到你的 `src/components/ui` 文件夹。你拥有它，你可以修改它。
* **v0.dev (AI UI)**：这是你的绝杀技。
    1. 打开 v0.dev。
    2. 输入："设计一个赛博朋克风格的登录表单，带有玻璃拟态背景。"
    3. 复制生成的 [[React]] 代码。
    4. 粘贴到你的项目。
    5. 下班。

---

## 总结

[[Next.js]] (App Router) 加上 [[Shadcn/UI]]，让你一个人就能并在 2 天内完成以前一个前端团队 2 周的工作量。
这就是 **Vibe Coding** 的核心：**极速构建，极致优雅**。
