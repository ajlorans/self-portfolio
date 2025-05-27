"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiShopify,
  SiWordpress,
} from "react-icons/si";
import { TbAutomation, TbDatabase } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-18 py-12 md:py-16 lg:py-20 px-4">
        <div className="order-1 md:order-1 flex-shrink-0 mb-8 md:mb-0">
          <Image
            src="/colorado-selfie.jpg"
            alt="Austin Lorans"
            width={240}
            height={240}
            className="rounded-full object-cover border-4 border-transparent bg-clip-border bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
            priority
          />
        </div>

        <div className="order-2 md:order-2 flex flex-col items-center md:items-center text-center md:text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4">
            Austin Lorans
          </h1>

          <div className="w-full max-w-[700px] text-lg md:text-xl text-muted-foreground h-16 sm:h-10 mb-6">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1500,
                "Business Automation Expert",
                1500,
                "E-commerce Store Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block"
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Core Technologies</h2>
          <p className="text-muted-foreground">
            The tools and technologies I use to build amazing experiences
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/30 border border-sky-200/50 dark:border-sky-800/50 group-hover:shadow-lg group-hover:shadow-sky-500/25 transition-all duration-300 group-hover:scale-105">
              <SiReact className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-sky-500 transition-colors">
              React
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/30 dark:to-gray-900/30 border border-gray-200/50 dark:border-gray-800/50 group-hover:shadow-lg group-hover:shadow-gray-500/25 transition-all duration-300 group-hover:scale-105">
              <SiNextdotjs className="w-8 h-8 text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <SiTypescript className="w-8 h-8 text-blue-600 group-hover:text-blue-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-blue-600 transition-colors">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 border border-cyan-200/50 dark:border-cyan-800/50 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105">
              <SiTailwindcss className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-cyan-500 transition-colors">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200/50 dark:border-green-800/50 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-105">
              <SiNodedotjs className="w-8 h-8 text-green-600 group-hover:text-green-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-green-600 transition-colors">
              Node.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-800/50 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <SiPostgresql className="w-8 h-8 text-blue-700 group-hover:text-blue-600 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-blue-700 transition-colors">
              PostgreSQL
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border border-green-200/50 dark:border-green-800/50 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-105">
              <SiShopify className="w-8 h-8 text-green-600 group-hover:text-green-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-green-600 transition-colors">
              Shopify
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-purple-800/50 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <TbAutomation className="w-8 h-8 text-blue-600 group-hover:text-blue-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-blue-600 transition-colors text-center">
              Power Automate
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <SiWordpress className="w-8 h-8 text-blue-600 group-hover:text-blue-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-blue-600 transition-colors">
              WordPress
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/30 dark:to-red-900/30 border border-orange-200/50 dark:border-orange-800/50 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-105">
              <TbDatabase className="w-8 h-8 text-orange-600 group-hover:text-orange-500 transition-colors" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-orange-600 transition-colors">
              SQL
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
