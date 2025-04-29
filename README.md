# Personal Portfolio Site

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and professional experience.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- About page with professional information
- Projects showcase featuring:
  - Big Green Egg AI Chatbot
  - Big Green Egg E-Commerce (Shopify)
  - Big Green Egg E-Commerce (WordPress)
- Contact form with Formspree integration
- Modern UI with smooth animations and transitions

## Technologies Used

- [Next.js 14](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - For styling
- [Shadcn UI](https://ui.shadcn.com) - UI component library
- [TypeScript](https://www.typescriptlang.org) - For type safety
- [Formspree](https://formspree.io) - For contact form handling
- [Vercel](https://vercel.com) - For deployment

## Projects Showcase

### Big Green Egg AI Chatbot
A custom AI chatbot widget integrating OpenAI API and Shopify API for Big Green Egg's e-commerce platform. Features real-time customer support, recipe recommendations, and product information.

### Big Green Egg E-Commerce (Shopify)
A modern e-commerce platform built on Shopify, featuring product catalog, shopping cart, checkout, and dealer locator. Includes custom theme development and third-party integrations.

### Big Green Egg E-Commerce (WordPress)
A comprehensive WordPress e-commerce solution using Elementor and WooCommerce. Features custom product pages, dealer management, and content management system.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/ajlorans/self-portfolio.git
cd self-portfolio
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/*` - Page components and routes
  - `about/` - Professional information and experience
  - `projects/` - Project showcase
  - `contact/` - Contact form
- `src/components/*` - Reusable UI components
- `src/lib/*` - Utility functions and shared code
- `public/*` - Static assets and images

## Deployment

The site is deployed on [Vercel](https://vercel.com) for optimal performance and automatic deployments.

## License

This project is open source and available under the [MIT License](LICENSE).
