# 自建节点：EC2 部署指南 (Nanny Mode)

> "真正的 Vibe Coder 拥有自己的航道。不依赖别人，只依赖 Linux。"

本指南将手把手（保姆级）教你如何在 AWS 上搭建一个属于你自己的、完全可控的 Proxy 节点。
我们将使用 **Shadowsocks (Rust版)**，基于 **Docker** 部署。这是最简单、最稳如老狗的方案。

---

## 第一步：获取云端主机 (The Cloud Host)

我们将使用 **AWS EC2**。如果你是新用户，你会获得 **12 个月的免费套餐 (Free Tier)**。

1. **注册/登录 AWS Console**。
2. **切换区域**：右上角选择 `Singapore` (新加坡) 或 `Tokyo` (东京)。**不要选美国**（延迟太高）。**不要选香港**（容易被墙）。
3. **启动实例 (Launch Instance)**：
    * **Name**: `My-Vibe-Proxy`
    * **OS**: 选择 `Ubuntu` (Server 24.04 LTS)。
    * **Instance Type**: 选择 `t2.micro` (这就是免费的那个)。
    * **Key Pair**: 创建一个新的密钥对（比如叫 `vibe-key`），**下载并保存好这个 .pem 文件**。这是你唯一的钥匙。
4. **网络设置 (Network)**：
    * 勾选 `Allow SSH traffic from Anywhere`。
    * **重要**：我们要手动添加入站规则。先启动，后面再改。
5. 点击 **Launch Instance**。

---

## 第二步：配置防火墙 (Security Group)

如果你不打开大门，没人进得去。

1. 在 EC2 列表里找到你的实例，点击它的 **Security Group** (安全组)。
2. 点击 **Edit Inbound Rules** (编辑入站规则)。
3. 添加一条规则：
    * **Type**: `Custom TCP`
    * **Port Range**: `8388` (这是我们要用的代理端口，或者随便选一个 1000-60000 之间的)
    * **Source**: `Anywhere-IPv4` (0.0.0.0/0)
4. 点击 **Save**。

---

## 第三步：连接服务器 (SSH)

打开你的本地终端 (Terminal)。

```bash
# 1. 赋予密钥权限（必须做，否则报错）
chmod 400 ~/Downloads/vibe-key.pem

# 2. 连接
# 把 1.2.3.4 换成你 EC2 的 Public IPv4 地址
ssh -i ~/Downloads/vibe-key.pem ubuntu@1.2.3.4
```

当你看到 `ubuntu@ip-x-x-x-x:~$` 时，恭喜你，你已经进入了云端。

---

## 第四步：Docker 一键部署 (The Magic)

我们不学配置文件。我们直接用 Docker。在服务器终端运行：

1. **安装 Docker** (如果有些镜像没有自带):

    ```bash
    curl -fsSL https://get.docker.com | sh
    ```

2. **启动 Shadowsocks** (复制整段运行):

    ```bash
    # 替换下面的 PASSWORD 为你自己的复杂密码！
    sudo docker run -d --name ss-rust \
      -e PASSWORD=TypeYourStrongPasswordHere \
      -e DNS=8.8.8.8 \
      -p 8388:8388/tcp \
      -p 8388:8388/udp \
      --restart always \
      ghcr.io/shadowsocks/ss-rust-server:latest
    ```

就这一步。结束了。
你的代理服务已经在 `8388` 端口跑起来了。

---

## 第五步：固定 IP (Elastic IP)

AWS 机器重启后 IP 会变。你需要一个固定的身份证。

1. 在 AWS 左侧菜单找到 **Elastic IPs**。
2. 点击 **Allocate Elastic IP** (申请一个)。
3. 选中申请到的 IP，点击 **Associate Elastic IP** (绑定)。
4. 选择你的 `My-Vibe-Proxy` 实例。
5. **注意**：如果你绑定了 EC2 它是免费的。如果你申请了 IP 却不绑定，AWS 会按小时扣费（为了防止浪费 IP 资源）。

---

## 第六步：客户端连接

回到你电脑上的 **Clash Verge** 或 **Shadowrocket (手机)**。

* **Type**: `Shadowsocks`
* **Server**: 不再是 1.2.3.4，而是你刚刚绑定的 **Elastic IP**。
* **Port**: `8388`
* **Password**: 你在 Docker 命令里写的那个密码。
* **Cipher (加密方式)**: `chacha20-ietf-poly1305` (这是 ss-rust 默认的最强加密)。

点击连接。打开 Google。
Enjoy the freedom.

## 总结

你刚刚用 5 分钟时间，完成了一个传统运维需要半小时配置的工作。
这就是 Docker 的力量。这就是 Vibe。
