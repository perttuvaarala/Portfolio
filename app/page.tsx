import About from "./_components/About";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6">
      <Hero />
      <About />
      <Projects />
      {/* Placeholder so the hero's contact button has an anchor target; filled in later. */}
      <section id="contact" aria-label="Contact" className="scroll-mt-8" />
    </main>
  );
}
