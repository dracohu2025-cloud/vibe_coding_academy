# The Cockpit: Tools of Trade

> "A worker is only as good as their tools. In 2025, your 'tool' is a Neural Exoskeleton."

Welcome to the **Vibe Coding Arsenal**.
We don't pick tools randomly. Our toolchain is like a Special Ops loadout—precision-engineered, where every item has a tactical purpose.

---

## 1. The Core Engine: Cursor (AI IDE)

This is no longer a debate. VS Code is great, but without native AI integration, it's like a gun without a scope.
**Cursor** is the current King.

### Pro Config Guide

Don't use the defaults.

1. **Model Selection**:
    * `CMD + K` (Coding): Set to **Claude 3.5 Sonnet** (or newer). Best logic for code generation.
    * `Chat` (Q&A): Set to **Gemini 1.5 Pro** or **GPT-4o** (for long-context search).
2. **Rule System (.cursorrules)**:
    * Create a `.cursorrules` file in your project root. This is the "House Rules" for your AI.
    * **Example**:

        ```text
        - Always use TypeScript.
        - Prefer Shadcn/UI components.
        - Never modify files I didn't verify.
        - Be concise. No yapping.
        ```

    * With this, the AI stops being an intern and becomes a Staff Engineer who knows your style.
3. **Composer (Beta)**:
    * Press `CMD + I` for Composer. This is "God Mode" for multi-file edits.
    * Prompt: "Change the primary color from blue to purple across all components and update CSS variables." It modifies 20 files at once.

---

## 2. Special Forces: AI Agents

When a task is too complex for a single Chat window, you need an **Agent**.
Agents can run terminal commands, read/write files, and self-correct.

### Recommended Weapon: Cline (Open Source)

An extension for VS Code / Cursor.

* **Workflow**:
    1. Give Cline a vague task: "Analyze `src/utils`, find duplicate functions, and refactor them."
    2. Cline runs `ls` and `grep` to explore.
    3. Cline proposes a plan and asks for approval.
    4. You click "Approve", and it starts rewriting files on disk.
* **Cost**: You pay specifically for the API usage (OpenRouter/Anthropic). Pennies for hours of human labor saved.

---

## 3. Command Center: Warp (Terminal)

If you are still using the default system terminal, you are coding in the Stone Age.
**Warp** is the terminal for the 21st Century.

* **AI Command Search**: Forgot how to untar? Press `#`, type "extract tar", and it gives you the command.
* **Workflows**: Save complex commands as reusable buttons.
* **Block Select**: Output is not a stream of text; it's blocks. Easily copy just the error log from the last failed command.

---

## 4. Browser Enhancements

* **Arc Browser**: Its sidebar and split-view are designed for wide monitors. Use "Boosts" to CSS-hack any website (e.g., force Dark Mode on docs).
* **React Developer Tools**: Mandatory. Inspect component trees and State changes.
* **VisBug**: A Chrome extension that lets you edit live webpages like Figma (move elements, change text/color). Incredible for UI fine-tuning.

## Summary

Your toolchain is not just software; it is your **Exoskeleton**.
Cursor is your mechanical arm; Warp is your HUD; AI Agents are your drone swarms.
Master them, configure them, until they disappear and become extensions of your will.
