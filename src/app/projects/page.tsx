"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with Next.js, TypeScript, and Tailwind CSS. Features user authentication, real-time updates, and a responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with a modern UI, shopping cart functionality, and secure payment processing using Stripe.",
    tags: ["React", "Node.js", "Stripe"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A mobile-responsive dashboard application with data visualization, user management, and real-time analytics.",
    tags: ["React", "Chart.js", "Firebase"],
    link: "https://github.com/yourusername/project-three",
  },
  {
    title: "Project Four",
    description:
      "A personal blog platform with markdown support, tag filtering, and a clean, minimal design focused on readability.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-four",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center mb-12">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium">
          My Work
        </div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my recent work and side projects.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 w-full">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group flex flex-col space-y-4 rounded-xl border p-6 hover:shadow-lg transition-all bg-card hover:bg-card/80 backdrop-blur-sm animate-fadeIn"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-grow"></div>
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300"
              >
                <Link href={project.link} target="_blank">
                  View Project
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
