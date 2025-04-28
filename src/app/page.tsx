import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <section className="space-y-8 py-12 md:py-16 lg:py-20">
        <div className="inline-block mx-auto rounded-full p-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="rounded-full bg-background p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-foreground"
            >
              <path d="M4 17l6-6-6-6" />
              <path d="M12 19h8" />
            </svg>
          </div>
        </div>

        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Austin Lorans
        </h1>

        <p className="max-w-[700px] mx-auto text-lg md:text-xl text-muted-foreground">
          I build modern web applications with cutting-edge technologies.
          Full-stack developer passionate about creating exceptional user
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
      </section>

      <div className="w-full py-8 flex justify-center gap-6">
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-70"></div>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-70"></div>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-70"></div>
      </div>
    </div>
  );
}
