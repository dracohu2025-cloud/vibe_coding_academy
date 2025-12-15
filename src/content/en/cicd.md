# Auto Pipeline: CI/CD

> "Humans should not do what machines can do better."

CI/CD (Continuous Integration / Continuous Deployment) sounds corporate, but its essence is simple: **Automate your shipping process**.
As a Vibe Coder, manually SSHing into a server to `git pull` and `npm run build` is unacceptable. That is subsistence farming. The industrial age demands an assembly line.

---

## 1. The Engine: GitHub Actions

Forget Jenkins. **GitHub Actions** is the most advanced, integrated automation platform today.
It lives right inside your repo (`.github/workflows/`).

### Your First Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Lint & Test
        run: npm run lint
      - name: Deploy
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

The moment you push code to `main`, GitHub's cloud servers wake up and execute these steps. If Lint fails, the deploy stops.

---

## 2. Quality Gates

Before merging code, you must ensure it doesn't just run, but runs *correctly*.

* **Linting (ESLint)**: Catch syntax errors and style issues.
* **Type Check (TypeScript)**: Catch logic errors before runtime.
* **Unit Test (Jest/Vitest)**: Ensure your functions return what they should.

The CI system is your **Strict Examiner**. It doesn't get tired, and it doesn't let bugs slide.

---

## 3. 2025 AI-Enhanced Pipeline

In 2025, we don't just automate builds; we automate **Code Review**.
Integrate **AI Reviewers** (like CodiumAI, CodeRabbit):

1. You open a Pull Request.
2. The AI bot reads your diffs.
3. The AI comments: "Line 42 has a potential null pointer exception. Suggested fix..."
4. It even writes your Release Notes for you.

---

## 4. Preview Deployments

The greatest innovation from Vercel/Netlify.
Every Pull Request generates a **Unique URL** built from that specific branch.
Send it to your designer. Send it to your PM. Once verified, merge to main.

## Summary

CI/CD gives you **Software Confidence**.
You know that if that little GitHub Actions dot turns Green, your users are seeing a perfect update. Sleep well.
