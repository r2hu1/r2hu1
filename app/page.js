import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Hero />
      <Projects />
      <div className="flex items-center justify-center mb-10">
        <Button variant="outline" asChild>
          <Link href="https://github.com/r2hu1">View All</Link>
        </Button>
      </div>
    </main>
  );
}
