import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header btnText={"Get In Touch"} pageUrl={"/contact"}/>
      <Hero />
    {/*<Skills />*/}
      <Projects />
    </div>
  )
}
