# 自动化流水线：CI/CD

> "人类不应该做机器能做的重复工作。"

CI/CD (持续集成/持续部署) 听起来很企业级，但它的本质很简单：**自动化你的发布流程**。
作为 Vibe Coder，手动 SSH 到服务器去 `git pull` 和 `npm run build` 是不可接受的。那是农民耕作的方式。工业时代需要流水线。

---

## 1. 核心引擎：GitHub Actions

忘掉 Jenkins 吧。**GitHub Actions** 是目前最先进、最集成的自动化平台。
它就在你的代码仓库里 (`.github/workflows/`).

### 你的第一个 Workflow

创建一个 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Lint & Test
        run: npm run lint
      - name: Deploy
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

当你把代码推送到 `main` 分支的那一刻，GitHub 的云端服务器就会启动，自动执行上述步骤。如果不通过 Lint 检查，部署就会停止。

---

## 2. 质量门禁 (Quality Gates)

在合并代码之前，必须确保它不仅能跑，还要跑得对。

* **Linting (ESLint)**：捕捉低级错误和风格问题。
* **Type Check (TypeScript)**：捕捉类型错误。
* **Unit Test (Jest/Vitest)**：确保你的逻辑没有崩溃。

CI 系统是你的**冷面考官**。它不会因为你累了就放过一个 Bug。

---

## 3. 2025 AI 增强流水线

在 2025 年，我们不仅自动化构建，我们自动化**Code Review**。
你可以集成 **AI Reviewer** (如 CodiumAI, CodeRabbit)：

1. 你提交 Pull Request。
2. AI 机器人自动阅读你的代码差异。
3. AI 在 PR 下方评论："第 42 行可能存在空指针异常，建议修改为..."
4. 它甚至能为你写好 Release Notes (更新日志)。

---

## 4. 预览部署 (Preview Deployments)

Vercel 和 Netlify 带来的最大革新。
每一个 Pull Request 都会生成一个**通过这一分支构建的独立网址**。
发给设计师看，发给产品经理看。确认无误后，再合并到主分支。

## 总结

CI/CD 让你拥有了**发布代码的信心**。
你知道，只要 GitHub Actions 的那个小圆点变成了绿色，并在 Vercel 上显示 "Ready"，你的用户就能看到完美的更新。睡个好觉，不用担心半夜服务器挂了。
