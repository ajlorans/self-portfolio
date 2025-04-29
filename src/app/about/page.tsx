"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full text-center mb-8">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
          About
        </div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">About Me</h1>
      </div>

      <div className="mx-auto max-w-3xl w-full mb-12">
        <div className="flex flex-col gap-8 items-center">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-800/30 mb-8">
              <p className="!mt-0">
                Hello! I&apos;m{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Austin Lorans
                </span>
                , a Marine Corps veteran and results-driven software developer with 4+ years of experience in
                software development, e-commerce, and process automation. Skilled in modern technologies
                and Agile methodologies to develop scalable, high-performance solutions. Strong track record of
                optimizing workflows, automating processes, and improving operational efficiency. Passionate
                about leveraging technology to drive business success.
              </p>
              <p className="mt-4">
                Outside of work, I enjoy golfing, hiking through national parks, spending time with my dogs, skiing, cooking, and maintaining an active lifestyle through regular workouts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Photos Grid */}
      <div className="w-full max-w-5xl mx-auto mt-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/colorado-selfie.jpg"
              alt="Colorado adventure"
              fill
              className="object-contain hover:scale-105 transition-transform duration-500 p-2"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/cali-hike-photo.jpg"
              alt="Hiking in California"
              fill
              className="object-contain hover:scale-105 transition-transform duration-300 p-2"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/usmc-selfie.jpg"
              alt="USMC service"
              fill
              className="object-contain hover:scale-105 transition-transform duration-300 p-2"
            />
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-3xl w-full">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2 className="text-2xl font-bold relative inline-block mb-6">
            <span className="relative z-10">Skills & Expertise</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 dark:bg-blue-700/30 -z-0 rounded"></span>
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Python</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">PHP</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">JavaScript</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">TypeScript</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">C#</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">ASP.NET</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Next.js</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">React</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Node</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Tailwind CSS</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">PostgreSQL</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">SQL</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">MongoDB</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">Supabase</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">Firebase</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">Dataverse</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Automation Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">Microsoft Power Automate</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">Microsoft AI Builder</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">ProcessMaker</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">N8N</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">Make</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">Zapier</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">Python</span>
                <span className="px-2 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs">PowerShell Scripts</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">Azure</span>
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">AWS</span>
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">Git</span>
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">Docker</span>
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">Postman</span>
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">JWT Authentication</span>
                <span className="px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs">Socket.io</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Analytics & Optimization</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Google Search Console</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Google Tag Manager</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">GA4</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Looker Studio</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Power BI</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Hotjar</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">VWO</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">SEMrush</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Ahrefs</span>
                <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 text-xs">Mouseflow</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Web & E-Commerce</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 text-xs">WordPress</span>
                <span className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 text-xs">WooCommerce</span>
                <span className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 text-xs">BigCommerce</span>
                <span className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 text-xs">Shopify</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold relative inline-block mb-6 mt-12">
            <span className="relative z-10">Experience</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200/50 dark:bg-purple-700/30 -z-0 rounded"></span>
          </h2>

          <div className="space-y-8">
            {/* Big Green Egg */}
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-sm text-muted-foreground">December 2023 - Present</p>
              </div>
              <p className="text-muted-foreground mb-4">Big Green Egg - Atlanta, GA</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Developed and optimized the Big Green Egg e-commerce platform using WordPress, Elementor, and BigCommerce</li>
                <li>Rebuilt the website using Shopify, improving scalability and creating a replicable framework for international partners</li>
                <li>Built and maintained over 600 SKUs, 500+ recipes, and 100+ blogs</li>
                <li>Developed a custom AI chatbot widget integrating OpenAI API and Shopify API</li>
                <li>Created a sales dashboard linking Power BI with dealer inventory for real-time analytics</li>
                <li>Implemented SEO and analytics tools including Google Search Console, GA4, and SEMrush</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Next.js</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">TypeScript</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Tailwind CSS</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">PostgreSQL</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Shopify</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Power BI</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">WordPress</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">PHP</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Liquid</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Google Search Console</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">GA4</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Google Tag Manager</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">VWO</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Hotjar</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Ahrefs</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">SEMrush</span>
                <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs">Microsoft Power Automate</span>
              </div>
            </div>

            {/* Appvault */}
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-sm text-muted-foreground">January 2022 - December 2023</p>
              </div>
              <p className="text-muted-foreground mb-4">Appvault - Atlanta, GA</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Redesigned and rebuilt a legacy app, Appvault Admin, using C#, ASP.NET MVC, and SQL</li>
                <li>Developed government legal document management systems</li>
                <li>Designed and pitched Microsoft Dynamics 365 prototypes</li>
                <li>Led GDPR and SOC 2 compliance efforts</li>
                <li>Created PowerShell scripts for automation</li>
                <li>Mentored an intern in business process automation</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">C#</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">ASP.NET MVC</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">SQL</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">PowerShell</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">Dynamics 365</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">Microsoft Power Automate</span>
                <span className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs">Power BI</span>
              </div>
            </div>

            {/* BBQ Smoker Pros */}
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold">Co-founder</h3>
                <p className="text-sm text-muted-foreground">June 2017 - December 2024</p>
              </div>
              <p className="text-muted-foreground mb-4">BBQ Smoker Pros</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Developed and grew a welding company specializing in large-scale BBQ smokers and food trucks</li>
                <li>Designed and welded custom smokers, later training and managing a team of welders</li>
                <li>Utilized CNC plasma cutting for custom steel signs and logos</li>
                <li>Expanded the company's social media presence</li>
              </ul>
            </div>

            {/* USMC */}
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold">Tank Mechanic (E-4) Corporal</h3>
                <p className="text-sm text-muted-foreground">June 2013 - June 2017</p>
              </div>
              <p className="text-muted-foreground mb-4">United States Marine Corps</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Managed combat readiness for 3 M1A1 Abrams Tanks and 1 M88A2 Heavy Equipment Recovery Vehicle</li>
                <li>Mentored and trained 4 junior Marines in technical and leadership skills</li>
                <li>Served as a marksmanship coach, improving company-wide firearms proficiency</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold relative inline-block mb-6 mt-12">
            <span className="relative z-10">Education</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-200/50 dark:bg-pink-700/30 -z-0 rounded"></span>
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-sm text-muted-foreground">January 2017 - June 2021</p>
              </div>
              <p className="text-muted-foreground">Georgia State University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
