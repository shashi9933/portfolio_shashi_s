#!/bin/bash

# Solar Portfolio - Quick Start Script
# This script sets up and starts the portfolio application

echo "🌟 Solar Portfolio - Quick Start"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo "✓ npm version: $(npm -v)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✓ Dependencies installed!"
    echo ""
else
    echo "✓ Dependencies already installed"
    echo ""
fi

# Ask user what they want to do
echo "What would you like to do?"
echo "1. Start development server (npm run dev)"
echo "2. Build for production (npm run build)"
echo "3. Preview production build (npm run preview)"
echo "4. Run linter (npm run lint)"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting development server..."
        echo "Your portfolio will open at http://localhost:3000"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "🏗️  Building for production..."
        npm run build
        echo "✓ Build complete! Check the 'dist/' folder"
        ;;
    3)
        echo ""
        echo "👁️  Previewing production build..."
        npm run preview
        ;;
    4)
        echo ""
        echo "🔍 Running linter..."
        npm run lint
        ;;
    *)
        echo "❌ Invalid choice. Please enter 1-4"
        exit 1
        ;;
esac

echo ""
echo "🎉 Done!"
