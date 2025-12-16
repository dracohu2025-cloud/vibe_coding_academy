# The Invisible Lifeline: Network & Proxy

> "In 2025, if you cannot connect to HuggingFace or GitHub freely, you are not sailing the ocean; you are paddling in a bathtub."

For a Vibe Coder, the network is not just for browsing Reddit. It is your **Exocortex Connector**. Your AI Agent needs to call [[OpenRouter]], your Docker needs to pull images, and your code needs to push to GitHub.

Mastering **Network Penetration** and **Traffic Routing** is not an elective course; it is a **Survival Skill**.

---

## 1. The Reality

Why isn't a standard VPN enough? Because as developers, we need **Precision Routing**, not just a global brute-force tunnel.

* **The Problem**:
  * `npm install` hangs.
  * `git clone` times out.
  * `docker pull` crawls at 10kb/s.
  * Accessing API keys generates weird "Region not supported" errors.
* **The Necessity**: You want intelligent split-tunneling.
  * **Direct**: Localhost, Internal Corporate Networks (Low Latency).
  * **Proxy**: GitHub, OpenAI, Anthropic, Docker Hub, PyPI.

---

## 2. The Arsenal (Tools)

### The Client

* **Clash Verge (Rev)**: The current open-source king. Supports **Tun Mode** (takes over all system traffic), has a modern UI, and flexible configuration.
* **Surge (Mac)**: Expensive ($50+), but it's the "Rolls Royce" of network tools. Extremely stable, beautiful dashboard, perfect for professionals.
* **OrbStack**: While a Docker tool, its built-in network bridging is legendary for making containers respect your host's proxy settings effortlessly.

### The Rules

Don't just use "Global Mode". Configure your Rule Groups:

* `DOMAIN-SUFFIX,openai.com,AI-Proxy`
* `DOMAIN-SUFFIX,github.com,Dev-Proxy`
* `IP-CIDR,127.0.0.1/8,DIRECT`

---

## 3. Terminal Proxying

This is where 90% of rookies fail. Your Chrome browser might be crossing the Great Firewall, but your Terminal doesn't know that. Terminals do not respect system proxy settings by default.

### The Magic Spells (Aliases)

Add these aliases to your `.zshrc` or `.bashrc`. This allows you to toggle your "superpowers" on and off at will.

```bash
# Port 7890 depends on your client settings (Clash default is usually 7890)
export PROXY_IP="127.0.0.1"
export PROXY_PORT="7890"

# Enable Proxy
alias proxy='export all_proxy=http://$PROXY_IP:$PROXY_PORT http_proxy=http://$PROXY_IP:$PROXY_PORT https_proxy=http://$PROXY_IP:$PROXY_PORT'

# Disable Proxy
alias unproxy='unset all_proxy http_proxy https_proxy'

# Test Connectivity
alias cip='curl ipinfo.io'
```

**How to use**:

1. Open Terminal.
2. Type `proxy` and hit Enter.
3. You now have superpowers. `git clone` flies. `brew install` finishes instantly.

### Git Specific

Sometimes Git needs explicit instruction:

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

---

## 4. Advanced: Tun Mode

Standard `http_proxy` variables don't catch everything (e.g., some Go programs, Rust crates, or ICMP traffic).

Enter **Tun Mode (Virtual Network Interface)**.

* **Concept**: Clash creates a virtual network card that intercepts **OS-level** traffic (TCP, UDP, ICMP).
* **Benefit**: You don't need to configure proxy settings for every single app. If Tun is on, the whole machine follows the rules.
* **How**: Find "Tun Mode" in Clash Verge settings and enable it (requires Admin/Root privileges).

---

## 5. SSH Proxying

Connecting to a remote AWS server shouldn't feel laggy. Use `ProxyCommand` to route your SSH connection through your high-speed local proxy.

In `~/.ssh/config`:

```ssh
Host github.com
    User git
    ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p
```

This speeds up Git operations and remote server management significantly.

---

## Summary

Network issues are the #1 source of developer frustration.
Spend 1 hour today to master your network environment, and you will save **hundreds of hours** this year.
When the network flows like water, the Vibe truly begins.
