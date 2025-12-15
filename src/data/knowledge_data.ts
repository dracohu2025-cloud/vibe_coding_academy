export type Topic = {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  phase: 'launch' | 'gear' | 'build' | 'expedition';
  x: number; // 0-100 for map positioning
  y: number; // 0-100 for map positioning
};

export const knowledgeData: Topic[] = [
  // --- PHASE 1: 启程 (The Launch) ---
  {
    id: 'mindset',
    title: 'Vibe Coding 心法',
    description: '不仅是写代码，更是一种生活方式。',
    phase: 'launch',
    x: 50,
    y: 90,
    content: `
# Vibe Coding 心法

## 什么是 Vibe Coding？
Vibe Coding 不是一种编程语言，也不是一种特定的技术栈，而是一种**状态**。
它是当你指尖在键盘上飞舞，屏幕上的代码如流光般倾泻，你感到一种深深的**Flow（心流）**时的感觉。

## 核心原则
1.  **视觉至上 (Visuals First)**: 我们不接受丑陋的 UI。即便是在开发阶段，也要让它看起来赏心悦目。
2.  **工具增强 (AI Augmented)**: 不要害怕使用 AI。GPT、Claude、Cursor 是你的副驾驶，不是你的替代者。
3.  **极速反馈 (Instant Feedback)**: 无论是 Hot Reload 还是 CI/CD，我们要的是由想法到现实的瞬间折叠。

## 给新手的建议
*   **不要背诵 API**：那是 AI 的工作。你需要理解的是**原理**和**结构**。
*   **动手去做**：看十遍教程不如写崩一次服务器。
*   **保持好奇**：Vibe 来源于对未知的探索。
`,
  },
  {
    id: 'hardware',
    title: '神兵利器 (硬件篇)',
    description: '工欲善其事，必先利其器。如何选择你的开发装备。',
    phase: 'launch',
    x: 30,
    y: 80,
    content: `
# 神兵利器：开发装备指南

## 电脑：Mac 还是 Windows？
在 Vibe Coding 的世界里，**MacBook Pro** 是绝对的王者。
*   **Unix 内核**：与服务器端环境（Linux）高度一致，终端体验极佳。
*   **屏幕素质**：XDR 屏幕能最完美地呈现你的 UI 设计。
*   **续航**：让你在咖啡馆 Vibe 一下午而不用到处找插座。

如果你必须使用 Windows，请务必安装 **WSL2 (Windows Subsystem for Linux)**。这是最后的尊严。

## 显示器
*   **推荐**：4K 是底线。为了代码的清晰度和字体的渲染效果，高分屏是必须的。
*   **布局**：双屏或带鱼屏（Ultra-wide）。一屏写代码，一屏看效果/文档。

## 键盘与外设
*   **键盘**：HHKB，Keychron，或任何让你打字产生节奏感的机械键盘。声音不要太吵，以免打断 Vibe。
*   **鼠标**：MX Master 3。人体工学的巅峰，手势操作能大幅提升效率。
`,
  },
  {
    id: 'network',
    title: '虫洞穿越 (网络/VPN)',
    description: '连接世界的桥梁。没有它，你只是一座孤岛。',
    phase: 'launch',
    x: 70,
    y: 80,
    content: `
# 虫洞穿越：科学上网与代理搭建

## 为什么需要？
现代开发离不开 Google, GitHub, Stack Overflow 以及各种 AI 模型接口。

## 方案 A：自建机场 (Hardcore Vibe)
如果你想把控一切，购买一台海外 VPS (AWS, DigitalOcean, Vultr)。
*   **工具**：Shadowsocks, Trojan, V2Ray。
*   **优点**：独享 IP，稳定，极客范儿。
*   **缺点**：维护成本高，IP 容易被墙。

## 方案 B：购买服务 (Efficiency Vibe)
对于大多数人，购买高质量的机场服务是更优解。
*   **选择标准**：支持 Clash 订阅，拥有 IPLC 专线（延迟低，不过墙）。
*   **客户端**：
    *   Mac: ClashX Pro (或者 Clash Verge)。
    *   Windows: Clash Verge。

## 终端代理 (Terminal Proxy)
你的浏览器能上网不代表你的终端能上网。
在 \`.zshrc\` 或 \`.bashrc\` 中添加：
\`\`\`bash
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
\`\`\`
让你的命令行也能自由呼吸。
`,
  },

  // --- PHASE 2: 装备 (The Gear) ---
  {
    id: 'tools',
    title: '全能驾驶舱 (IDE & Tools)',
    description: '这是你的战斗机驾驶舱。',
    phase: 'gear',
    x: 20,
    y: 60,
    content: `
# 全能驾驶舱：IDE 与开发工具

## IDE：Cursor - AI 时代的编辑器
Vibe Coding 首选 **Cursor**。它基于 VS Code，但集成了强大的 AI 能力。
*   **Cmd+K**：直接生成/修改代码。
*   **Chat**：与你的代码库对话。
*   **Composer**：多文件编辑，重构神器。

## 终端：iTerm2 + Oh My Zsh
不要使用系统自带的终端。
*   **iTerm2**：强大的功能，分屏，快捷键。
*   **Oh My Zsh**：插件丰富，主题酷炫。
*   **Powerlevel10k**：让你的终端提示符看起来像宇宙飞船仪表盘。

## 常用 CLI 工具
*   **Brew**：Mac 上的包管理器。所有软件一条命令搞定。
*   **Git**：版本控制。学会 \`git status\`, \`git add\`, \`git commit\`, \`git push\`。
`,
  },
  {
    id: 'ai-stack',
    title: '第二大脑 (AI Stack)',
    description: '不仅是 Copilot，而是你的外脑。',
    phase: 'gear',
    x: 80,
    y: 60,
    content: `
# 第二大脑：AI 工具矩阵

## 1. 编码辅助
*   **Cursor/GitHub Copilot**：实时代码补全。
*   **V0.dev**：生成 UI 组件的神器。你描述界面，它生成 React 代码。

## 2. 知识检索
*   **Perplexity**：替代 Google。直接问它技术问题，它给你带引用的总结。
*   **ChatGPT (Plus)**：逻辑推理，架构设计，复杂 Bug 排查。

## 3. 图像与设计
*   **Midjourney**：生成素材图，Logo，背景。
*   **Figma**：虽然不是 AI，但配合 AI 插件，设计效率翻倍。
`,
  },

  // --- PHASE 3: 构建 (The Build) ---
  {
    id: 'nextjs',
    title: '核心引擎 (Next.js)',
    description: 'React 的完全体。现代 Web 开发的标准答案。',
    phase: 'build',
    x: 50,
    y: 50,
    content: `
# 核心引擎：Next.js + React

## 为什么是 Next.js？
*   **全栈能力**：既能写前端 (Page)，也能写后端 (API Routes)。
*   **性能**：服务器端渲染 (SSR) 和静态生成 (SSG) 让网站秒开。
*   **生态**：几乎所有的现代库都优先支持 React/Next.js。

## 学习路径
1.  **React 基础**：Components, Props, State (useState, useEffect)。
2.  **Next.js 路由**：App Router (文件即路由)。
3.  **Data Fetching**：Server Components 直接读数据库。

## 样式：Tailwind vs Vanilla CSS
*   **Tailwind**：效率极高，原子化 CSS。适合快速构建。
*   **Vanilla CSS (Modules)**：Vibe Coding 推荐。为了追求极致的视觉效果和微交互，手写 CSS 往往能给你更多的控制权和"手感"。
`,
  },
  {
    id: 'serverless',
    title: '云端魔法 (Serverless)',
    description: '没有服务器，只有代码。',
    phase: 'build',
    x: 30,
    y: 40,
    content: `
# 云端魔法：Serverless 架构

## 什么是 Serverless？
你不需要购买服务器，不需要配置 Linux，不需要担心死机。你只管写代码，云厂商负责运行。

## 推荐平台：Vercel
Next.js 的母公司。
*   **部署**：\`git push\` 即自动部署。
*   **预览**：每次 Pull Request 都会生成一个预览链接。
*   **免费额度**：个人项目完全够用。

## 数据库：Supabase / Neon
*   **Supabase**：开源的 Firebase 替代品。PostgreSQL 数据库，自带 Auth，Storage，Realtime。
*   **Neon**：Serverless Postgres。计算和存储分离，瞬间扩容。
`,
  },

  // --- PHASE 4: 远征 (The Expedition) ---
  {
    id: 'remote',
    title: '超距连接 (Remote-SSH)',
    description: '在本地 VS Code 操作地球另一端的服务器。',
    phase: 'expedition',
    x: 70,
    y: 30,
    content: `
# 超距连接：Remote-SSH 开发体验

## 场景
当你需要一台高性能的 Linux 机器（比如跑 AI 模型），或者部署复杂的 Docker 服务时，Serverless 可能不够用了。你需要一台真正的 VPS。

## VS Code Remote - SSH
这是微软的神作插件。
它可以让你通过 SSH 连接远程服务器，但体验完全像是在编辑本地文件。

## 配置步骤
1.  **生成密钥**：\`ssh-keygen -t ed25519\`
2.  **配置 Host**：在 \`~/.ssh/config\` 中填写服务器 IP 和 User。
3.  **连接**：点击 VS Code 左下角绿标，选择 Host。

## 技巧
搭配 **Tmux** 使用，即使断网，服务器上的终端进程也不会中断。
`,
  },
  {
    id: 'docker',
    title: '时空胶囊 (Docker)',
    description: '将应用和环境打包，在任何地方完美运行。',
    phase: 'expedition',
    x: 40,
    y: 20,
    content: `
# 时空胶囊：Docker 容器化

## 痛点：\"在我的机器上是好的\"
环境不一致是开发的噩梦。Docker 解决了这个问题。

## 核心概念
*   **Image (镜像)**：应用的快照，包含代码+环境。
*   **Container (容器)**：镜像的运行实例。

## 实战：Docker Compose
不需要记复杂的命令。编写 \`docker-compose.yml\`。
\`\`\`yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: secret
\`\`\`
一条命令 \`docker-compose up -d\`，整个技术栈瞬间启动。
`,
  },
  {
    id: 'cicd',
    title: '自动化流水线 (CI/CD)',
    description: '让机器人帮你测试和发布。',
    phase: 'expedition',
    x: 60,
    y: 10,
    content: `
# 自动化流水线：CI/CD

## 什么是 CI/CD？
*   **CI (持续集成)**：你提交代码，自动运行测试，检查代码风格。
*   **CD (持续部署)**：测试通过后，自动发布到生产环境。

## GitHub Actions
免费，强大，直接集成在 GitHub 仓库中。
创建一个 \`.github/workflows/deploy.yml\`。

## 典型流程
1.  **Push** 代码到 main 分支。
2.  **GitHub Action** 触发。
3.  **Build**：下载代码，安装依赖，构建项目。
4.  **Test**：运行单元测试。
5.  **Deploy**：调用 Vercel 接口部署，或者 SSH 到你的服务器拉取最新镜像重启。

彻底告别手动 FTP 上传文件的原始时代。
`,
  },
];
