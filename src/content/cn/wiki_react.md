---
title: "[[React]]"
phase: "wiki"
---

# React: web 开发的通用语

> "Write once, run everywhere?" 不，[[[[React]]]] 是 "Learn once, write anywhere."

在 2025 年，**[[[[React]]]]** 不仅仅是一个 JavaScript 库，它是 Web 开发的事实标准（Standard）。如果你问 "我该学什么前端框架？"，答案有 90% 的概率是 [[[[React]]]] 及其生态。

---

## 什么是 [[[[React]]]]？

[[[[React]]]] 是由 Facebook (Meta) 开发的，用于构建用户界面的 JavaScript 库。

它的核心思想是 **组件化 (Components)**：
就像搭积木一样，你把一个复杂的页面拆分成一个个独立的小部件（按钮、导航栏、卡片），然后把它们拼在一起。

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## 为什么 [[[[React]]]] 赢了？

1. **虚拟 DOM (Virtual DOM)**：
    * [[[[React]]]] 不会直接操作笨重的 DOM（网页元素）。它在内存里维护了一棵虚拟树。
    * 当数据变化时，它对比新旧两棵树，算出最小的差异，然后只更新需变动的部分。这叫 **Reconciliation (协调)**。
    * *听起来很复杂？* 你只需要知道：**它很快。**

2. **单向数据流 (One-way Data Flow)**：
    * 数据像瀑布一样，从上层组件流向下层组件。这意味着数据流向清晰，Debug 容易。

3. **Hooks (钩子)**：
    * [[[[React]]]] 16.8 引入的 Hooks (`useState`, `useEffect`) 彻底改变了游戏规则。它让你可以用简单的函数写出复杂的逻辑。

    ```jsx
    // 这行代码就让你的组件拥有了"记忆"
    const [count, setCount] = useState(0); 
    ```

## 2025 年的 [[[[React]]]]

在今天，我们很少直接写纯 [[[[React]]]] ("Vanilla [[[[React]]]]")。我们通常使用 **Web 框架**，而 [[[[React]]]] 是这个框架的核心引擎。

* **[Next.js](wiki:wiki_next_js)**：[[[[React]]]] 官方推荐的生产级框架。它解决了路由、渲染（SSR）、API 等所有脏活累活。
* **[[[[React]]]] Server Components (RSC)**：最新的范式。组件可以直接在服务器上运行，直接读取数据库，然后把结果发给浏览器。前端和后端的界限正在消失。

## Vibe 建议

不要去学 class components (类组件) 和 `componentDidMount` 那些老古董了。
直接拥抱 **Function Components + Hooks**。
直接上手 **[[[[Next.js]]]]**。

[[[[React]]]] 就是你的光剑。握紧它。
