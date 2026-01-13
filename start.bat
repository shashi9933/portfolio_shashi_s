@echo off
REM Solar Portfolio - Quick Start Script (Windows)
REM This script sets up and starts the portfolio application

cls
echo.
echo ============================================
echo   Solar Portfolio - Quick Start (Windows)
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed.
    echo Please install Node.js 16+ from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node -v
echo npm version:
npm -v
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo Dependencies installed!
    echo.
) else (
    echo Dependencies already installed
    echo.
)

REM Display menu
echo What would you like to do?
echo.
echo 1. Start development server
echo 2. Build for production
echo 3. Preview production build
echo 4. Run linter
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Starting development server...
    echo Your portfolio will open at http://localhost:3000
    echo.
    call npm run dev
) else if "%choice%"=="2" (
    echo.
    echo Building for production...
    call npm run build
    echo Build complete! Check the 'dist' folder
) else if "%choice%"=="3" (
    echo.
    echo Previewing production build...
    call npm run preview
) else if "%choice%"=="4" (
    echo.
    echo Running linter...
    call npm run lint
) else (
    echo Invalid choice. Please enter 1-4
    pause
    exit /b 1
)

echo.
echo Done!
pause
