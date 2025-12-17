# 时空胶囊：Docker 与容器化

> "如果你的代码在你看不到的地方不能运行，那你就不拥有它。"

在没有 Docker 的黑暗时代，我们花费 30% 的生命在配置环境上。"在我的机器上是好的" 是那时的绝望呐喊。
Docker 将这一页彻底翻篇。它不仅是部署工具，它是**环境的快照**。

---

## 1. 核心概念：镜像即真理 (Image is Truth)

* **Image (镜像)**：这是你的应用的完整克隆体。它包含了操作系统（精简版）、代码、运行环境、依赖库。它一旦构建，就是不可变的。
* **Container (容器)**：镜像的运行实例。你可以瞬间启动 100 个相同的容器。

**Vibe 哲学**：永远不要手动安装 MySQL。永远不要手动安装 Redis。**一切都在容器里运行**。

---

## 2. 编排：Docker Compose

你不止有一个应用。你有前端、后端、数据库、缓存。你需要一个指挥家。
`docker-compose.yml` 是你的乐谱。

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/myapp
  db:
    image: postgres:15-alpine
    volumes:
      - db_data:/var/lib/postgresql/data
  redis:
    image: redis:alpine
```

**一行命令启动宇宙**：`docker-compose up -d`。
你的整个开发环境就绪了。没有配置冲突，没有版本地狱。

---

## 3. 终极 Vibe：DevContainers

如果你想体验极致的流畅，请在 VS Code (或 Cursor) 中使用 **DevContainers**。

* **原理**：你的编辑器实际上是连接到了一个运行中的 Docker 容器里。
* **效果**：你的本地电脑甚至不需要安装 Node.js 或 Python。所有工具链都在容器里。
* **团队优势**：新同事入职，Clone 仓库，点击 "Reopen in Container"。他立刻就能开始写代码。不需要配置半天的环境。

---

## 4. 2025 AI 建议

当你在写 `Dockerfile` 时，请直接问 [[Antigravity]] 或 Claude：
> "为我的 [[Next.js]] 15 应用写一个生产级的多阶段构建 Dockerfile，使用 Alpine 镜像以减小体积。"

 AI 会为你处理复杂的 Multi-stage builds，将你的镜像从 1GB 压缩到 80MB。这是极致的效率。

## 总结

Docker 让你把你的应用打包成一个**时间胶囊**。无论你把它扔到 [[Vercel]], AWS 还是 5 年后的新电脑上，它都能以完全相同的方式解压并运行。这就是工程的确定性。
