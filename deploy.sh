#!/bin/bash

# Portfolio Deployment Script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)

# Switch to gh-pages branch
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages

if [ $? -ne 0 ]; then
    echo "❌ Failed to switch to gh-pages branch!"
    git checkout $CURRENT_BRANCH
    exit 1
fi

# Copy built files
echo "📁 Copying built files..."
cp -r dist/* .

# Add and commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Deploy portfolio - $(date)"

# Push to GitHub
echo "⬆️ Pushing to GitHub Pages..."
git push origin gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your portfolio will be available at: https://sakshi725744.github.io/portfolio/"
else
    echo "❌ Deployment failed!"
fi

# Switch back to original branch
echo "🔄 Switching back to $CURRENT_BRANCH..."
git checkout $CURRENT_BRANCH

echo "🎉 Deployment process completed!"
