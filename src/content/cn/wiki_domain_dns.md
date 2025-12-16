---
title: "Domain & DNS"
phase: "wiki"
---

# 域名与 DNS：你在互联网上的 "房产证"

> "No Domain, No Brand." (没有域名，就没有品牌)

对于 Vibe Coder 来说，把代码跑在 Localhost 只是自娱自乐。拥有一个**顶级域名 (TLD)**，是你的作品走向世界的成人礼。

不要用 `192.168.x.x` 或者 `myapp.herokuapp.com` 糊弄用户。去买一个真正的域名，它是你数字资产的**地契**。

---

## 🏗️ 1. 如何购买域名？ (Buying Land)

### 推荐去哪买？

2025 年，**只推荐**以下两家服务商。其他的（尤其是那些界面像 90 年代、推销各种垃圾服务的）一律避雷。

| 服务商 | 推荐理由 | 评价 |
| :--- | :--- | :--- |
| **[[Cloudflare]]** | **首选推荐**。成本价续费（不加价），全球最强 DNS 解析，安全防护免费送。 | 🌟🌟🌟🌟🌟 (闭眼入) |
| **Namecheap** | 老牌，支持支付宝 (Alipay)，首年优惠极大（几块钱能买 `.xyz`）。 | 🌟🌟🌟🌟 (支付方便) |

### 购买步骤 (以 Cloudflare 为例)

1. **注册账号**：访问 [dash.cloudflare.com](https://dash.cloudflare.com/) 注册。
2. **查找域名**：点击左侧 **"Domain Registration"** -> **"Register Domains"**。
3. **搜索**：输入你想要的名字（例如 `vibe-coding-cool.com`）。
    * *Tip: `.com` 最保值，但 `.me`, `.io`, `.ai` 更符合 Geek 气质。新手练手推荐 `.xyz`，极便宜。*
4. **购买**：
    * Cloudflare 会显示 **Wholesale cost** (批发价)，通常是 $9.77/年 (加这ICANN税费)。这是良心价。
    * 填写个人信息（ICANN 规定必须填，但 Cloudflare 会免费提供 WHOIS 隐私保护，不用担心泄漏）。
    * 绑卡支付（Visa/MasterCard）。
5. **完成**：此域名现在归你了。

---

## 🎛️ 2. 什么是 DNS？ (The Phonebook)

**DNS (Domain Name System)** 就像互联网的电话本。

* **你的名字**：`www.google.com` (好记，给人看)
* **你的电话**：`142.250.191.238` (IP 地址，给机器连)

DNS 的工作就是把 **域名** 翻译成 **IP 地址**。

### 为什么我们还需要 "配置 DNS"？

因为你买域名的地方（Registrar，如 Namecheap）和你的网站托管的地方（Hosting，如 [[Vercel]] 或 AWS）通常是分开的。

你需要告诉域名的**管理者 (Nameserver)**：
*"嘿，当有人访问 `vibe.com` 时，请把流量指去 [[Vercel]] 的服务器。"*

---

## ⚙️ 3. 如何配置 DNS？ (Configuration)

我们强烈建议将你的域名 **Nameservers (NS)** 托管给 **[[Cloudflare]]**，哪怕你的域名是在别处买的。

### 为什么用 Cloudflare 解析？

* **快**：全球最快的 DNS 解析服务之一。
* **稳**：抗 DDoS 攻击能力业界第一。
* **SSL**：免费送你一把 HTTPS 的“小绿锁”。
* **免费**：对个人开发者完全免费。

### 配置实战：常用的 3 种记录

在 Cloudflare 的 **DNS** -> **Records** 页面添加记录：

#### 1. A 记录 (Address)

**用途**：将域名指向一个 **IP 地址** (IPv4)。

* **场景**：你自己买了一台 AWS EC2 服务器，它有一个公网 IP `1.2.3.4`。
* **配置**：
  * Type: `A`
  * Name: `@` (代表主域名，如 `abc.com`)
  * IPv4 Address: `1.2.3.4`
  * Proxy status: `Proxied` (开启小橙云，隐藏真实 IP，防攻击)

#### 2. CNAME 记录 (Alias)

**用途**：将域名指向**另一个域名** (别名)。

* **场景**：你用 [[Vercel]] 托管前端。Vercel 会给你一个 `cname.vercel-dns.com`。
* **配置**：
  * Type: `CNAME`
  * Name: `www` (代表 `www.abc.com`)
  * Target: `cname.vercel-dns.com`
  * Proxy status: `Proxied`

#### 3. AAAA 记录

**用途**：将域名指向一个 **IPv6 地址**。

* 与 A 记录类似，如果不确定服务器是否支持 IPv6，通常可以先不填。

---

## 🛡️ Vibe Coder 最佳实践

1. **Cloudflare 一把梭**：无论在哪买的域名，第一件事就是把 **Nameservers** 改成 Cloudflare 的。
2. **开启 HTTPS**：在 Cloudflare -> SSL/TLS，选择 **Full** 模式，确保全链路加密。
3. **不要裸奔**：确保 Proxy status 是 **Orange Cloud (已代理)** 状态。如果只有灰色云朵，你的源服务器 IP 就会暴露在黑客眼皮底下。
4. **TTL 保持默认**：Cloudflare 的 Auto TTL 足够智能，不用手动改。

---

现在，去拥有你的第一个 `.com` 吧。那是你在数字世界的门牌号。
