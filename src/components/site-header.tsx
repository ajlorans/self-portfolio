"use client";

import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Austin Lorans</span>
        </Link>
        <div className="flex items-center gap-6">
          <MainNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
