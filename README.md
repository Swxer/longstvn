# Steven Long Nguyen - Personal Portfolio

A creative portfolio with a pixel art aesthetic featuring custom parallax city layers and smooth scrolling.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy the 'dist' folder to Netlify
```

## 📋 Project Overview

- **Framework**: React 19 + TypeScript + Vite
- **Purpose**: Personal portfolio showcasing projects, tech stack, and creative design
- **Style**: Pixel art aesthetic with retro cityscape parallax hero

## 📦 Key Packages

| Package       | Purpose                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| lenis         | Smooth scrolling - provides a premium, buttery-smooth scroll feel                                    |
| framer-motion | Parallax animations - moves city layers at different speeds based on scroll position to create depth |
| motion        | Additional animation utilities                                                                       |
| @mui/material | UI components, icons, and layout system                                                              |

## How the Parallax Works

The parallax effect is created in `useParallaxScroll.tsx` using Framer Motion's `useTransform`:

```javascript
// Different scroll ranges create different movement speeds
const city1Y = useTransform(scrollY, [0, 800], [0, -390]);
const city5Y = useTransform(scrollY, [0, 800], [0, -800]);
// City 5 moves faster than City 1 = deeper parallax depth
```

Each city layer moves at a different speed - farther layers move slower, closer layers move faster.

## 🎨 Key Features

- **Multi-layer parallax hero**: 5 city layers + sky/stars/moon
- **Smooth scroll with Lenis**: removes janky default scroll behavior
- **Pixel-perfect rendering**: imageRendering: pixelated preserves pixel art quality
- **Responsive design**: works across devices with viewport-relative sizing
- **Browser zoom friendly**: parallax layers scale naturally with zoom

## 📁 Project Structure

```bash
src/
├── components/
│   ├── Hero.tsx                    # Main page - combines background + content
│   ├── HeroParallaxBackground.tsx  # Parallax layers (city1-5, sky, moon, stars)
│   ├── MainContent.tsx             # Main content container (TechStack, Projects, Footer)
│   ├── StarCanvas.tsx              # Canvas-rendered starfield for parallax sky
│   ├── TechStack.tsx               # Tech stack display
│   ├── ProjectSection.tsx          # Projects grid/section
│   ├── ProjectCard.tsx             # Individual project card component
│   └── Footer.tsx                  # Footer with social links
├── hooks/
│   └── useParallaxScroll.tsx       # Scroll-to-Y transforms for parallax layers
├── data/
│   ├── techStacks.tsx              # Tech stack data (icons, names)
│   └── projects.tsx                # Projects data (title, description, links, images)
├── images/
│   ├── hero/                       # Parallax layer images
│   │   ├── sky.png                 # Background sky
│   │   ├── moon.png                # Moon layer
│   │   ├── city1.png - city5.png   # City layers (back to front)
│   │   ├── city5-2.png             # Frontmost city layer (repeated horizontally)
│   │   └── oiia.gif                # Spinning cat easter egg
│   └── project/                    # Project screenshots
├── App.tsx                         # Root app component
├── main.tsx                        # React entry point
├── index.css                       # Global styles (resets)
└── App.css                         # App-specific styles (scrollbar, root)
```

## 🔧 Notes for Future You

- **Parallax speeds**: Edit `src/hooks/useParallaxScroll.tsx` to adjust how fast each layer moves
- **Add new parallax layer**: Copy an existing `<motion.img>` pattern in `HeroParallaxBackground.tsx`
- **Image assets**: All hero images are in `src/images/hero/`
- **Deployment**: Run `npm run build` and drag the dist folder to Netlify
- **Browser zoom**: The city5v2 layer uses CSS background with viewport units to handle Ctrl+/Ctrl- gracefully
