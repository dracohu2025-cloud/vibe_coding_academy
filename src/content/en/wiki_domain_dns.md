---
title: "Domain & DNS"
phase: "wiki"
---

# Domain & DNS: Your Real Estate on the Internet

> "No Domain, No Brand."

For a Vibe Coder, running code on Localhost is just practice. Owning a **Top-Level Domain (TLD)** is your rite of passage into the real world.

Don't serve your users with `192.168.x.x` or `myapp.herokuapp.com`. Go buy a real domain. It is the **Title Deed** to your digital asset.

---

## 🏗️ 1. How to Buy a Domain?

### Where to Buy? (Ranked)

In 2025, we **only recommend** the following two providers. Avoid legacy registrars that try to upsell you useless "SEO packages" or "Email hosting".

| Provider | Why Recommend? | Rating |
| :--- | :--- | :--- |
| **[[Cloudflare]]** | **#1 Choice**. Wholesale pricing (no markup), world's best DNS, free enterprise-grade security. | 🌟🌟🌟🌟🌟 (No-brainer) |
| **Namecheap** | The veteran. Supports varied payment methods (crypto/cards), great first-year discounts (cheap `.xyz`). | 🌟🌟🌟🌟 (Easy payment) |

### Step-by-Step (Cloudflare Example)

1. **Register Account**: Go to [dash.cloudflare.com](https://dash.cloudflare.com/).
2. **Find Domain**: Click "Domain Registration" on the left -> "Register Domains".
3. **Search**: Type your desired name (e.g., `vibe-coding-cool.com`).
    * *Tip: `.com` is classic, but `.me`, `.io`, `.ai` fit the Vibe Coder aesthetic better. `.xyz` is great for cheap experiments.*
4. **Purchase**:
    * Cloudflare shows the **Wholesale cost** (e.g., ~$9.77/year + ICANN fee). No markup.
    * Fill in personal info (Required by ICANN laws, but Cloudflare gives free Privacy Protection).
    * Pay with card.
5. **Done**: You now own this slice of the internet.

---

## 🎛️ 2. What is DNS? (The Phonebook)

**DNS (Domain Name System)** is the phonebook of the Internet.

* **Human Name**: `www.google.com` (Easy to remember)
* **Machine Number**: `142.250.191.238` (IP Address)

DNS translates the **Domain Name** into the **IP Address**.

### Why do I need to "Configure" it?

Because where you *bought* the domain (Registrar) and where you *host* your website (Hosting, like [[Vercel]] or AWS) are usually different places.

You need to tell the **Nameserver**:
*"Hey, when someone visits `vibe.com`, please direct that traffic to [[Vercel]]'s servers."*

---

## ⚙️ 3. How to Configure DNS?

We strongly recommend delegating your domain's **Nameservers (NS)** to **[[Cloudflare]]**, even if you bought the domain elsewhere.

### Why Cloudflare DNS?

* **Speed**: One of the fastest DNS resolvers on Earth.
* **Stability**: Industry-leading [[DDoS]] protection.
* **SSL**: Free automatic HTTPS ("Green Lock").
* **Free**: Totally free for personal developers.

### The "Big 3" Records

Go to Cloudflare **DNS** -> **Records** to add these:

#### 1. A Record (Address)

**Purpose**: Points a domain to an **IP Address** (IPv4).

* **Scenario**: You have a DigitalOcean/AWS VPS with a static IP `1.2.3.4`.
* **Config**:
  * Type: `A`
  * Name: `@` (Represents root domain `abc.com`)
  * IPv4 Address: `1.2.3.4`
  * Proxy status: `Proxied` (Orange cloud on = Real IP hidden)

#### 2. CNAME Record (Alias)

**Purpose**: Points a domain to **another Domain Name**.

* **Scenario**: You are hosting specific pages on [[Vercel]]. They give you `cname.vercel-dns.com`.
* **Config**:
  * Type: `CNAME`
  * Name: `www` (Represents `www.abc.com`)
  * Target: `cname.vercel-dns.com`
  * Proxy status: `Proxied`

#### 3. AAAA Record

**Purpose**: Points a domain to an **IPv6 Address**.

* Similar to A record. If you don't use IPv6, you can usually ignore this.

---

## 🛡️ Vibe Best Practices

1. **Always Cloudflare**: No matter where you bought the domain, change the **Nameservers** to Cloudflare immediately. It gives you full control.
2. **Force HTTPS**: In Cloudflare -> SSL/TLS, select **Full** mode.
3. **Hide Your Origin**: Ensure Proxy status is **Orange Cloud (Proxied)**. If it's Grey, attackers can find your server's real IP and DDoS it.
4. **Leave TTL Auto**: Cloudflare knows best.

---

Now, go claim your digital territory.
