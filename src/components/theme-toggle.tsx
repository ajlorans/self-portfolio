"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative h-9 w-24 rounded-full border border-input bg-background p-0"
      >
        <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-primary" />
        <div className="flex h-full w-full items-center justify-between px-3">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <Moon className="h-4 w-4 text-muted-foreground" />
        </div>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-9 w-24 rounded-full border border-input bg-background p-0 hover:bg-accent/50 transition-colors"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-primary transition-all duration-600 ease-in-out ${
          theme === "dark" ? "translate-x-[3.75rem]" : "translate-x-0"
        }`}
      />
      <div className="flex h-full w-full items-center justify-between px-3">
        <Sun
          className={`h-4 w-4 transition-colors duration-600 ${
            theme === "dark" ? "text-muted-foreground" : "text-primary-foreground"
          }`}
        />
        <Moon
          className={`h-4 w-4 transition-colors duration-600 ${
            theme === "light" ? "text-muted-foreground" : "text-primary-foreground"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
