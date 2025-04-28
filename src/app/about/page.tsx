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
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-60 h-60 md:w-72 md:h-72 overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src="https://placehold.co/400x400/667fff/ffffff?text=AJ+Lorenzo"
              alt="Austin Lorans profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-lg dark:prose-invert mx-auto md:mx-0">
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-800/30 mb-8">
              <p className="!mt-0">
                Hello! I&apos;m{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Austin Lorans
                </span>
                , a passionate full-stack developer with a keen interest in
                building modern web applications. I specialize in creating
                efficient, scalable, and user-friendly solutions using
                cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
          <Image
            src="https://placehold.co/600x450/5c51d3/ffffff?text=Working"
            alt="Working on projects"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
          <Image
            src="https://placehold.co/600x450/9151d3/ffffff?text=Coding"
            alt="Coding session"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
          <Image
            src="https://placehold.co/600x450/d351b9/ffffff?text=Presenting"
            alt="Presenting a project"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl w-full">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2 className="text-2xl font-bold relative inline-block mb-6">
            <span className="relative z-10">Skills & Expertise</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 dark:bg-blue-700/30 -z-0 rounded"></span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 !list-none !pl-0 mb-12">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Frontend: React, Next.js, TypeScript, Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span>Backend: Node.js, Python, SQL/NoSQL databases</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              <span>DevOps: Git, Docker, CI/CD pipelines</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Cloud: AWS, Vercel, Netlify</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold relative inline-block mb-6">
            <span className="relative z-10">Experience</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200/50 dark:bg-purple-700/30 -z-0 rounded"></span>
          </h2>
          <div className="space-y-4 mb-12">
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">
                Senior Frontend Developer
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                TechCorp Inc. • 2020 - Present
              </p>
              <p className="!mt-0 !mb-0">
                Led development of responsive web applications using React and
                Next.js. Implemented design systems and accessibility standards
                across multiple projects.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground mb-2">
                WebSolutions Ltd. • 2018 - 2020
              </p>
              <p className="!mt-0 !mb-0">
                Developed and maintained various web applications using
                JavaScript, Node.js and SQL databases. Collaborated with design
                and product teams to implement new features.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold relative inline-block mb-6">
            <span className="relative z-10">Education</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-200/50 dark:bg-pink-700/30 -z-0 rounded"></span>
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">
                BSc in Computer Science
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                University of Technology • 2014 - 2018
              </p>
              <p className="!mt-0 !mb-0">
                Specialized in software engineering and web development.
                Graduated with honors and received the Dean&apos;s Award for
                academic excellence.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-muted bg-card/50 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-2">
                Web Development Certification
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Tech Academy • 2017
              </p>
              <p className="!mt-0 !mb-0">
                Intensive program covering advanced frontend and backend
                technologies. Completed capstone project with industry
                mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
