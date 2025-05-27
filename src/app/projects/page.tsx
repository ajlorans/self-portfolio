"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Big Green Egg AI Chatbot",
    description:
      "A custom AI chatbot widget integrating OpenAI API and Shopify API for Big Green Egg's e-commerce platform. Features real-time customer support, recipe recommendations, and product information.",
    tags: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Shopify API",
      "Socket.io",
      "PostgreSQL",
    ],
    link: "https://github.com/ajlorans/bgeChatbot",
    demoLink: "https://bge-chatbot.vercel.app/",
  },
  {
    title: "Big Green Egg Sales Dashboard",
    description:
      "A comprehensive sales and inventory dashboard for executives to visualize dealer performance, track YTD sales, monitor inventory levels, and identify trends. Features dealer analytics, top performer leaderboards, automated alerts for low inventory and sales dips, interactive charts, and Power BI integration.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "Power BI",
    ],
    link: "https://github.com/ajlorans/bge-sales-dashboard",
  },
  {
    title: "Big Green Egg E-Commerce (Shopify)",
    description:
      "A modern e-commerce platform built on Shopify, featuring product catalog, shopping cart, checkout, and dealer locator. Includes custom theme development and third-party integrations.",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS", "HTML", "Shopify API"],
    link: "https://biggreenegg.com/",
  },
  {
    title: "Big Green Egg E-Commerce (WordPress)",
    description:
      "A comprehensive WordPress e-commerce solution using Elementor and WooCommerce. Features custom product pages, dealer management, and content management system.",
    tags: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "PHP",
      "MySQL",
      "JavaScript",
    ],
    link: "https://staging.biggreenegg.com/",
  },
  {
    title: "Legal Document Management System",
    description:
      "A comprehensive web application designed to streamline the management and approval workflow of legal documents. Features JWT-based authentication, role-based access control, secure document uploading, multi-step approval workflows, and document status tracking with approve/reject capabilities.",
    tags: [
      ".NET 8.0",
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "React",
      "Tailwind CSS",
      "JWT",
      "Vite",
    ],
    link: "https://github.com/ajlorans/document-management",
  },
  {
    title: "Big Green Egg Warranty Automation",
    description:
      "Automated the Big Green Egg warranty claim process. Utilized Microsoft Forms for customer submissions, Microsoft AI Builder to scan and verify receipts for proof of purchase, and Power Automate to orchestrate the workflow, organizing validated claims within SharePoint for efficient customer support team access.",
    tags: [
      "Microsoft Power Automate",
      "Microsoft Forms",
      "Microsoft AI Builder",
      "SharePoint",
    ],
    link: "#",
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
          A collection of my recent work
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
            {project.link !== "#" && (
              <div className="pt-2 flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300"
                >
                  <Link href={project.link} target="_blank">
                    {project.title.includes("Chatbot") ||
                    project.title.includes("Sales Dashboard") ||
                    project.title.includes("Legal Document")
                      ? "View Code"
                      : "View Site"}
                  </Link>
                </Button>
                {project.demoLink && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300"
                  >
                    <Link href={project.demoLink} target="_blank">
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl mt-16">
        <div
          className="group flex flex-col space-y-4 rounded-xl border p-6 hover:shadow-lg transition-all bg-card hover:bg-card/80 backdrop-blur-sm animate-fadeIn"
          style={{
            animationDelay: "300ms",
          }}
        >
          <div className="h-2 w-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">This site is built with:</h2>
            <p className="text-muted-foreground">
              The technologies and services used to build this portfolio
              website.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Next.js" },
              { name: "TypeScript" },
              { name: "Tailwind CSS" },
              { name: "shadcn/ui" },
              { name: "Vercel" },
              { name: "Formspree" },
            ].map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
