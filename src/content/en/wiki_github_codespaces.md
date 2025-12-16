---
title: "GitHub Codespaces"
phase: "wiki"
---

# GitHub Codespaces: The Ultimate Nanny-Level Tutorial

> "Give me a browser, and I shall move the world."

**[[GitHub Codespaces]]** is an instant cloud development environment provided by GitHub. It's not just a web-based VS Code; it's a fully configured, powerful Linux computer that you can summon on demand.

For a Vibe Coding Rookie, this means: **You never need to configure a local environment again.** No more pulling your hair out because of Python version conflicts.

---

## 🚀 0. Why Do You Need It? (What & Why)

### The Pain Points

* ❌ Switched computers? Time to reinstall Node, Python, Git...
* ❌ New intern joins? Usually spends the first week just setting up their environment.
* ❌ Run a large LLM locally? Your MacBook fan takes off, and your lap gets cooked.
* ❌ Want to fix a bug on an iPad or work computer? But no IDE installed.

### The Codespaces Solution

* ✅ **Instant On**: The environment is bound to the repo. Click a button, and the environment is ready.
* ✅ **Cloud Power**: Your computer is just a display. Compilation and execution happen on Microsoft's cloud servers (default 2 or 4 cores, even GPU options available).
* ✅ **Total Consistency**: Uses config files to ensure everyone's dev environment is 100% identical.

---

## 🛠️ 1. How to Enable? (Quick Start)

You don't need a credit card (Individual users get **60 hours** free per month, plenty for rookies).

### Method A: Via GitHub Web (Most Common)

1. Open any GitHub repository (e.g., your forked `vibe_coding_rookie`).
2. Click the green **< > Code** button.
3. Switch to the **Codespaces** tab.
4. Click the green **Create codespace on main** button.
5. **Wait 1-2 minutes**. GitHub is provisioning a VM, installing VS Code Server, and cloning your code.
6. **Success!** You will see a familiar VS Code interface, but running inside your browser.

### Method B: The Hacker Shortcut (Coolest)

1. Open any GitHub repository page.
2. Press the **`.` (dot)** key on your keyboard.
3. It instantly transforms into Web VS Code. But this is just a "Web Editor" (cannot run code yet).
4. To run code, click **Switch to Codespace** in the bottom left corner to upgrade to the full cloud server.

---

## ⚙️ 2. Core Config: How Does It Know What to Install? (.devcontainer)

This is the key to mastering Vibe Coding.
The soul of Codespaces lives in the `.devcontainer` folder at the root of your project.

### As long as this folder has a config file

* `devcontainer.json`: Tells Codespaces which Extensions to install, which Linux Image to use.

**Example (Auto-install [[ESLint]] and Prettier extensions for your environment):**

```json
// .devcontainer/devcontainer.json
{
  "name": "Vibe Coding Environment",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

**How do Rookies do it?**
If you don't know how to write this, no worries.
Inside Codespaces, press `F1` (or `Ctrl/Cmd + Shift + P`), type:
`> Codespaces: Add Dev Container Configuration Files`
Follow the wizard (e.g., select Node.js), and it will generate the config for you!

---

## 🎮 3. Daily Usage Tips (Lifecycle)

### Remember to Stop! (Stop)

Free hours are generous, but don't waste them.

* **Close Tab**: It suspends automatically, but to be safe, stop it manually.
* **Manual Stop**: Click **Codespaces** > **Stop Current Codespace** in the bottom left.
* **Auto-Sleep**: By default, it hibernates after 30 minutes of inactivity.

### How to Reconnect?

1. Go back to the GitHub repo page.
2. Click **< > Code** > **Codespaces**.
3. You will see the instance you created. Click it to **restore instantly**.

### How to Delete? (Delete)

If you messed up an environment or don't need it:
Go to [github.com/codespaces](https://github.com/codespaces), find it, click `...` -> **Delete**.
Out with the old, in with the new.

---

## 💡 4. Pro Tip: Connect Local VS Code to Cloud

Don't like browser shortcuts?
You can use your **Local VS Code** to connect to the Cloud Codespace!

1. Install the **[[GitHub Codespaces]]** extension in your local VS Code.
2. Click the green Remote icon >< in the bottom left.
3. Select **Connect to Codespace...**.
4. Choose your cloud instance.
5. **Boom!** Use your smooth local app to control the powerful cloud server.

---

## Summary

**[[GitHub Codespaces]]** is your **Cloud Cyber Cafe**.
As long as you have an account, sit down and play (code). No need to worry about what GPU is in the case or how the admin installed the OS.

**Now, go to your repo and press the `.` key!**
