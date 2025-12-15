#!/bin/bash

# Vibe Coding Rookie - Vercel Deployment Script 🚀

echo "==========================================="
echo "   Vibe Coding Deployment Manager v1.0"
echo "==========================================="

# Check for required tools
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed."
    exit 1
fi

# 1. Environment Check
echo ""
echo "🔍 Checking Environment..."
if [ ! -f .env.local ] && [ ! -f .env ]; then
    echo "⚠️  Warning: No .env local file found."
    echo "   You might need OPENROUTER_API_KEY for the chat feature."
else
    echo "✅ Environment file found."
fi

# 2. Build Test
echo ""
echo "🏗️  Testing Production Build..."
echo "   Running: npm run build"
echo "   (This ensures your app won't crash on Vercel)"
echo ""

npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build Successful! You are ready to deploy."
else
    echo ""
    echo "❌ Build Failed. Please fix the errors above before deploying."
    exit 1
fi

# 3. Deployment Instructions
echo ""
echo "==========================================="
echo "   🚀 READY FOR LIFT OFF"
echo "==========================================="
echo ""
echo "Choose your path:"
echo ""
echo "Path A: Git Push (Recommended)"
echo "   1. git add . && git commit -m 'ready for deploy'"
echo "   2. git push"
echo "   3. Vercel will auto-deploy."
echo ""
echo "Path B: Vercel CLI (Direct)"
echo "   1. Install: npm i -g vercel"
echo "   2. Run: vercel"
echo ""
echo "Make sure to set these Environment Variables in Vercel Dashboard:"
echo "   - OPENROUTER_API_KEY"
echo "   - DEFAULT_MODEL (optional, defaults to deepseek/deepseek-chat)"
echo ""
