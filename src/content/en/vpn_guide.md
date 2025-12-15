# Build Your Node: EC2 & Shadowsocks Guide

> "A true Vibe Coder owns their lane. Rely on no one but Linux."

This Nanny-Mode guide will walk you through launching your own, fully controlled Proxy Node on AWS.
We will use **Shadowsocks (Rust Edition)** running on **Docker**. This is the simplest, most robust method.

---

## Step 1: The Cloud Host

We utilize **AWS EC2**. New users get the **Free Tier (12 months)**.

1. **Log in to AWS Console**.
2. **Region**: Select `Singapore` or `Tokyo` (Top right corner). **Avoid US/Europe** (Latency is too high for Asia-based users).
3. **Launch Instance**:
    * **Name**: `My-Vibe-Proxy`
    * **OS**: `Ubuntu` (Server 24.04 LTS).
    * **Instance Type**: `t2.micro` (The free one).
    * **Key Pair**: Create new pair (e.g., `vibe-key`), **Download and KEEP the .pem file**. It's your only key.
4. **Network**:
    * Check `Allow SSH traffic from Anywhere`.
    * We will add the Proxy port manually next.
5. Click **Launch Instance**.

---

## Step 2: The Firewall (Security Group)

If you don't open the door, no one gets in.

1. Find your instance in EC2 list, click its **Security Group**.
2. Click **Edit Inbound Rules**.
3. Add Rule:
    * **Type**: `Custom TCP`
    * **Port Range**: `8388` (Or any port 1000-60000).
    * **Source**: `Anywhere-IPv4` (0.0.0.0/0)
4. Click **Save**.

---

## Step 3: Connect (SSH)

Open your local Terminal.

```bash
# 1. Permission fix (Mandatory)
chmod 400 ~/Downloads/vibe-key.pem

# 2. Connect
# Replace 1.2.3.4 with your EC2 Public IPv4
ssh -i ~/Downloads/vibe-key.pem ubuntu@1.2.3.4
```

When you see `ubuntu@ip-x-x-x-x:~$`, you are in the clouds.

---

## Step 4: Docker Deploy (The Magic)

No config files. Just Docker. Run in server terminal:

1. **Install Docker** (if missing):

    ```bash
    curl -fsSL https://get.docker.com | sh
    ```

2. **Start Shadowsocks**:

    ```bash
    # REPLACE 'TypeYourStrongPasswordHere' WITH YOUR OWN PASSWORD!
    sudo docker run -d --name ss-rust \
      -e PASSWORD=TypeYourStrongPasswordHere \
      -e DNS=8.8.8.8 \
      -p 8388:8388/tcp \
      -p 8388:8388/udp \
      --restart always \
      ghcr.io/shadowsocks/ss-rust-server:latest
    ```

Done. Your proxy service is up on port `8388`.

---

## Step 5: Elastic IP (Static ID)

EC2 IP changes on reboot. You need a permanent ID.

1. Go to **Elastic IPs** in left menu.
2. **Allocate Elastic IP**.
3. Select the new IP, click **Associate**.
4. Choose your `My-Vibe-Proxy` instance.
5. **Note**: It's free if attached to a running instance. Unattached IPs cost money.

---

## Step 6: Client Setup

Go to **Clash Verge** on Mac or **Shadowrocket** on iPhone.

* **Type**: `Shadowsocks`
* **Server**: Your new **Elastic IP**.
* **Port**: `8388`
* **Password**: The password you set in Docker command.
* **Cipher**: `chacha20-ietf-poly1305` (Default for ss-rust).

Connect. Open Google.
Enjoy the freedom.

## Summary

You just did 30 minutes of DevOps work in 5 minutes.
This is the power of Docker. This is Vibe.
