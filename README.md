# Secout

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🔧 TypeScript for type safety
- 🧩 Component-based architecture
- 🎪 Pre-built landing page sections

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm, yarn, or pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/basantsaed2/scout

//live demo
https://scout-p757.vercel.app/

//Development 
npm run dev
# or
yarn dev
# or
pnpm dev

//Building for Production
npm run build
# or
yarn build
# or
pnpm build

# Project Structure
├── public/                 # Static files
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── sections/      # Landing page sections
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Plans.tsx
│   │   ├── ui/           # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── Footer.tsx    # Footer component
│   ├── lib/              # Utilities and configurations
│   └── types/            # TypeScript type definitions
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration