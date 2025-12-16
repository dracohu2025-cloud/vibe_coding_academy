# 隐形生命线：网络与代理 (Network & Proxy)

> "在 2025 年，如果你无法连接到 HuggingFace 或 GitHub，你就不是在大海中航行，而是在浴缸里划船。"

对于 Vibe Coder 而言，网络不仅仅是用来浏览网页的。它是你的**外脑连接器**。你的 AI Agent 需要调用 [[OpenRouter]]，你的 Docker 需要拉取镜像，你的代码需要推送到 GitHub。

在中国（或任何网络受限地区）做开发，掌握**网络穿透**技术不是“选修课”，而是**生存技能**。

---

## 1. 现状与认知 (The Reality)

为什么普通的 VPN 不够用？因为作为开发者，我们需要的是**精准的分流**，而不是全局的暴力代理。

* **开发者的需求**：
  * **直连**：Baidu, WeChat, Localhost (低延迟)。
  * **代理**：GitHub, OpenAI, Anthropic, Docker Hub, PyPI, Maven Central。
* **2025 的挑战**：越来越多的 AI 服务（如 Claude）对 IP 纯净度要求极高。你需要稳定、高质量的节点，最好是住宅 IP 或专线。

---

## 2. 武器库 (The Tools)

### 客户端 (The Client)

* **Clash Verge (Rev)**：目前的开源之王。支持 Tun 模式（接管系统所有流量），UI 现代，配置灵活。
* **Surge (Mac)**：虽然昂贵 ($50+)，但它是网络工具中的“劳斯莱斯”。极度稳定，可视化面板精美，适合不差钱的专业人士。
* **OrbStack**: 虽然它是 Docker 工具，但它内置了极好的网络桥接功能，能让你的容器无缝走主机的代理网络。

### 规则 (The Rules)

不要只用全局模式。学会配置 Rule Group：

* `DOMAIN-SUFFIX,openai.com,AI-Proxy`
* `DOMAIN-SUFFIX,github.com,Dev-Proxy`
* `IP-CIDR,127.0.0.1/8,DIRECT`

---

## 3. 终端代理 (Terminal Proxy)

这是 90% 的新手“阵亡”的地方。你的浏览器可以访问 Google，但这不代表你的 Terminal (终端) 可以。Terminal 默认不走系统代理设置。

### 魔法咒语 (Aliases)

在你的 `.zshrc` 或 `.bashrc` 中添加这通常被被称为“魔法”的别名：

```bash
# 端口号 7890 取决于你的代理软件设置，请自行检查
export PROXY_IP="127.0.0.1"
export PROXY_PORT="7890"

# 开启代理
alias proxy='export all_proxy=http://$PROXY_IP:$PROXY_PORT http_proxy=http://$PROXY_IP:$PROXY_PORT https_proxy=http://$PROXY_IP:$PROXY_PORT'

# 关闭代理
alias unproxy='unset all_proxy http_proxy https_proxy'

# 测试网络
alias cip='curl ipinfo.io'
```

**使用方法**：

1. 打开终端。
2. 输入 `proxy` 并回车。
3. 现在的你，拥有了超能力。`git clone` 飞快，`brew install` 不再报错。

### Git 专属配置

有时候，Git 需要单独配置：

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

*(注意：用了这个之后，连接国内 Gitee 可能会慢，需要来回切换)*

---

## 4. 进阶：Tun 模式 (The Tun Mode)

传统的 `http_proxy` 环境变量并不能搞定所有软件（比如某些 Go 程序或 Rust 编译工具，它们不通过 HTTP 协议联网）。

这时候你需要 **Tun Mode (虚拟网卡模式)**。

* **原理**：Clash 会在系统中创建一个虚拟网卡，强制接管**所有**层级的网络流量（ICMP, TCP, UDP）。
* **优势**：无需在这个终端设代理，那个软件设代理。只要开启 Tun，整个电脑如入无人之境。
* **开启方式**：在 Clash Verge 设置中找到 "Tun Mode" 并打开（需要管理员权限）。

---

## 5. 服务器 SSH 代理

当你用 SSH 连接远程服务器时，如果像蜗牛一样慢，请使用 `ProxyCommand` 让 SSH 流量走你的代理：

在 `~/.ssh/config` 文件中：

```ssh
Host github.com
    User git
    ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p
```

这不仅加速 Git，也能加速你连接 AWS/GCP 的速度。

---

## 总结

网络问题是挫败感的主要来源。
花 1 小时彻底搞懂并配置好你的网络环境，将在未来一年为你通过**数以百计**的小时。
当你的网络像呼吸一样顺畅时，Vibe 才会真正降临。
