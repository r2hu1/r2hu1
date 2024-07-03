import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="py-10 flex-wrap px-6 md:px-20 lg:px-32 flex items-center justify-center gap-5 overflow-hidden">
        <div className="flex flex-wrap gap-3 sm:grid grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-secondary/20 p-3 rounded-md flex flex-col justify-center items-center gap-3">
              <img src={project.image} alt={project.title} className="w-full max-h-64 sm:h-44 rounded-md" />
              <div>
                <h1 className="text-lg font-medium">{project.title}</h1>
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="mt-3 flex gap-3">
                  <Button size="sm" asChild><Link href={project.link} className="flex items-center gap-1">View <ArrowRight className="w-4 h-4 -rotate-45" /></Link></Button>
                  <Button asChild variant="secondary" size="sm"><Link href={project.github} className="flex items-center gap-1">Source <Code className="w-4 h-4" /></Link></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
