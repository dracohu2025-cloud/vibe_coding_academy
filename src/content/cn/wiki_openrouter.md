---
title: "OpenRouter"
phase: "wiki"
---

# OpenRouter: AI 界的 "Visa" 卡

> "One Key to Rule Them All." (一把钥匙走天下)

**[[OpenRouter]]** 不是一个 AI 模型，它是所有 AI 模型的**统一接口**。
简单来说，它就像 AI 界的 **Visa/MasterCard** 支付网关。你不需要分别去注册 OpenAI、Anthropic、Google、Meta 的账号，**你只需要一个 [[OpenRouter]] 账号**，就能调用地球上几乎所有的主流大模型。

对于 Vibe Coder 来说，它是 **"Bring Your Own Key" (BYOK)** 时代的必备基建。

---

## 🚀 0. 为什么你需要它？ (Why)

### 痛点

* ❌ 想用 **Claude 3.5 Sonnet** 写代码，又想用 **GPT-4o** 润色文档，还得用 **Gemini 1.5 Pro** 处理长视频。你需要订阅 3 个 $20/月的会员？
* ❌ 很多顶级模型（如 Claude）在某些地区封号严重，注册困难，支付更困难。
* ❌ 只是偶尔用一下某个模型，开月费会员太亏了。

### OpenRouter 的解法

* ✅ **一号通吃**：一个账号，同时使用 GPT-5.2, [[Claude 4.5]], [[Gemini 3.0]], Llama 4...
* ✅ **按量付费**：用多少算多少，没有月费。通过 API 调用，价格通常比官网更便宜。
* ✅ **无视门槛**：它作为一个聚合商，帮你解决了复杂的支付和地区限制问题。
* ✅ **永不掉线**：官网挂了？[[OpenRouter]] 通常还有备份线路。

---

## 🛠️ 1. 如何开通？ (快速上手)

### 步骤 A：注册与充值

1. 访问 [OpenRouter.ai](https://openrouter.ai/)。
2. 可以直接用 Google 账号或 GitHub 账号登录。
3. 点击右上角头像 -> **Credits**。
4. 你需要先充值（最低 $5）。支持国际信用卡。*（提示：相比于每个月订阅 $20 的 ChatGPT Plus，这 $5 可能够你用很久，因为写代码主要消耗的是 Token，而 API 价格现在已经打到了地板价）*。

### 步骤 B：创建 "万能钥匙" (Key)

1. 点击导航栏的 **Keys**。
2. 点击 **Create Key** 按钮。
3. 起个名字（例如 `My Vibe Coding Key`）。
4. **重要**：如果不设限额，建议不要勾选 "No limit"。虽然 API 便宜，但为了防止代码死循环刷爆余额，可以设个 $10 的上限。
5. **复制那个以 `sk-or-` 开头的密钥**。这串字符就是你的通关密码，保存好，它只显示一次。

---

## ⚙️ 2. 实战：怎么用到我的 IDE 里？

这是 [[OpenRouter]] 最强大的地方。现代 AI 编辑器（[[Cursor]], [[Roo Code]], LibertAI 等）都完美支持它。

### 场景一：配合 **Roo Code** (VS Code 插件)

1. 在 VS Code 打开 [[Roo Code]] 插件。
2. **API Provider** 选择 `[[OpenRouter]]`。
3. 把刚才那串 `sk-or-...` 粘贴进去。
4. **Model** 选择：
    * `anthropic/claude-4.5-sonnet` (目前最强编程模型)
    * `google/gemini-3.0-pro` (速度极快且多模态能力最强)
    * `deepseek/deepseek-r1` (国产之光，性价比极高)

### 场景二：配合 **Cursor**

虽然 [[Cursor]] 自带模型，但如果你想用它调用一些 [[Cursor]] 官方还没上的新模型（或者想走自己的计费通道）：

1. 打开 [[Cursor]] Settings (Cmd+I -> Settings)。
2. 找到 **Models** -> **OpenAI API Key** (注意：很多插件借用 OpenAI 的格式来兼容 OpenRouter)。
3. **Base URL** 填：`https://openrouter.ai/api/v1`
4. **API Key** 填你的 [[OpenRouter]] Key。
5. 然后添加你想用的模型名字（去 [[OpenRouter]] 官网查 ID，例如 `google/gemini-pro-3.0`）。

---

## 📊 3. 选什么模型？ (Menu)

[[OpenRouter]] 上有几百个模型，Vibe Coder 只需关注这几个：

| 模型 ID | 绰号 | 场景 | 特点 |
| :--- | :--- | :--- | :--- |
| `anthropic/claude-4.5-sonnet` | **代码之神** | 复杂代码生成、架构设计 | 目前逻辑最强，写代码最不容易出错。 |
| `google/gemini-3.0-pro` | **全能王** | 视频分析、超长文档 | 窗口巨大（10M Context），多模态能力无敌。 |
| `openai/gpt-5.2` | **思考者** | 极难的逻辑推理 | 推理能力的天花板，虽然贵，但能解决疑难杂症。 |
| `deepseek/deepseek-coder` | **国产之光** | 日常补全、中文注释 | 性价比极致，中文理解最好。 |

---

## 💡 总结

**[[OpenRouter]]** 是 **Vibe Coding** 时代的基础设施。
它把模型变成了**水电煤**一样的公共资源。你通过一个插座（Key），就能用上全世界的电力（算力）。

**去搞一个 Key 吧，把你的 IDE 武装到牙齿。**
