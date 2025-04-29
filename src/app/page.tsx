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
                "Business Automation Specialist",
                1500,
                "E-commerce Solutions Architect",
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

      <section className="w-full max-w-4xl mx-auto py-12 md:py-16">
        <h2 className="text-2xl font-semibold mb-8">Core Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-x-8 gap-y-10 text-muted-foreground">
          <div className="flex flex-col items-center gap-2 group">
            <SiReact className="w-10 h-10 group-hover:text-sky-500 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              React
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiNextdotjs className="w-10 h-10 group-hover:text-foreground transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiTypescript className="w-10 h-10 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiTailwindcss className="w-10 h-10 group-hover:text-cyan-500 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiNodedotjs className="w-10 h-10 group-hover:text-green-600 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              Node.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiPostgresql className="w-10 h-10 group-hover:text-blue-700 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              PostgreSQL
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiShopify className="w-10 h-10 group-hover:text-green-500 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              Shopify
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <TbAutomation className="w-10 h-10 group-hover:text-blue-600 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              Microsoft Power Automate
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <SiWordpress className="w-10 h-10 group-hover:text-blue-800 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              WordPress
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <TbDatabase className="w-10 h-10 group-hover:text-orange-600 transition-colors" />
            <span className="text-sm group-hover:text-foreground transition-colors">
              SQL
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
