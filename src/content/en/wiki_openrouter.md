---
title: "OpenRouter"
phase: "wiki"
---

# OpenRouter: The "Visa" Card of AI

> "One Key to Rule Them All."

**[[OpenRouter]]** is not an AI model; it is the **unified interface** for all AI models.
Think of it as the **Visa/MasterCard** payment gateway of the AI world. You don't need separate subscriptions for OpenAI, Anthropic, Google, and Meta. **You only need one [[OpenRouter]] account** to access almost every mainstream LLM on the planet.

For a Vibe Coder, this is essential infrastructure for the **"Bring Your Own Key" (BYOK)** era.

---

## 🚀 0. Why Do You Need It? (Why)

### The Pain Points

* ❌ Want to use **Claude 3.5 Sonnet** for coding, **GPT-4o** for docs, and **Gemini 1.5 Pro** for long videos. Do you really want to pay for 3 separate $20/month subscriptions?
* ❌ Many top-tier models (like Claude) have strict regional bans or payment difficulties in certain countries.
* ❌ You only use a specific model occasionally. Paying a monthly fee feels wasteful.

### The OpenRouter Solution

* ✅ **All-in-One**: One account for GPT-4, Claude 3, Gemini, Llama 3, DeepSeek...
* ✅ **Pay-as-you-go**: No monthly fees. You pay for what you use via API, often cheaper than official pricing (no middleman markups, plus access to cheap open-source models).
* ✅ **No Barriers**: As an aggregator, it handles the complex payment and regional restrictions for you.
* ✅ **Reliability**: If the official API is down, [[OpenRouter]] often has backup routes.

---

## 🛠️ 1. How to Start? (Quick Guide)

### Step A: Register & Top-up

1. Visit [OpenRouter.ai](https://openrouter.ai/).
2. Login with Google or GitHub.
3. Click your avatar -> **Credits**.
4. Top up (minimum $5). **Tip**: Compared to a $20/month ChatGPT Plus sub, this $5 might last you a long time since coding mostly consumes text tokens, and API prices are racing to the bottom.

### Step B: Create the "Master Key"

1. Click **Keys** in the navigation.
2. Click **Create Key**.
3. Name it (e.g., `My Vibe Coding Key`).
4. **Important**: Set a limit (e.g., $10) to prevent accidental loops draining your wallet, even though APIs are cheap.
5. **Copy the key starting with `sk-or-`**. This is your password. Save it safely; it won't be shown again.

---

## ⚙️ 2. Action: How to Use in My IDE?

This is where [[OpenRouter]] shines. Modern AI Editors ([[Cursor]], [[Roo Code]], LibertAI) support it perfectly.

### Scenario 1: With **Roo Code** (VS Code Extension)

1. Open [[Roo Code]] in VS Code.
2. **API Provider**: Select `[[OpenRouter]]`.
3. Paste your `sk-or-...` key.
4. **Model**: Choose:
    * `anthropic/claude-3.5-sonnet` (The God of Coding right now)
    * `google/gemini-2.0-flash-001` (Fast and free/cheap)
    * `deepseek/deepseek-r1` (Best value for money)

### Scenario 2: With **Cursor**

Although [[Cursor]] has its own fleet, if you want access to models they don't officially support yet (or use your own billing):

1. Open [[Cursor]] Settings (Cmd+I -> Settings).
2. Find **Models** -> **OpenAI API Key** (Note: Many tools use the OpenAI format to be compatible with OpenRouter).
3. **Base URL**: Enter `https://openrouter.ai/api/v1`
4. **API Key**: Enter your [[OpenRouter]] Key.
5. Add the model name manually (check [[OpenRouter]] IDs, e.g., `google/gemini-pro-1.5`).

---

## 📊 3. Which Model to Choose? (Menu)

[[OpenRouter]] has hundreds of models, but Vibe Coders only need to care about these:

| Model ID | Nickname | Use Case | Features |
| :--- | :--- | :--- | :--- |
| `anthropic/claude-3.5-sonnet` | **Code God** | Complex coding, Architecture | Strongest logic, fewest bugs. |
| `google/gemini-2.0-flash-001` | **The Flash** | Quick Q&A, Long docs | Insane speed, huge context (1M), dirt cheap or free. |
| `deepseek/deepseek-coder` | **Value King** | Autocomplete, Comments | Extreme cost-performance ratio. |
| `openai/o1-preview` | **The Thinker** | Hard logic puzzles | Thinks before speaking. Expensive, but solves the unsolvable. |

---

## 💡 Summary

**[[OpenRouter]]** is the **Utility Infrastructure** of the Vibe Coding era.
It turns AI models into a utility like **water or electricity**. You plug in one socket (Key) and get access to the world's computing power.

**Go get a Key, and arm your IDE to the teeth.**
