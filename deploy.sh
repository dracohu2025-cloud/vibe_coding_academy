#!/bin/bash

# Initialize git if not already
if [ ! -d ".git" ]; then
    git init
    git branch -M main
fi

# Add all files
git add .

# Commit
git commit -m "feat: Initial vibe coding rookie website"

# Note: The user needs to add the remote manually or I can prompt them.
# For now, I'll just print the instructions.
echo "Git repository initialized and committed."
echo "To deploy to Vercel:"
echo "1. Create a new repository on GitHub."
echo "2. Run: git remote add origin <your-repo-url>"
echo "3. Run: git push -u origin main"
echo "4. Import project into Vercel dashboard."
