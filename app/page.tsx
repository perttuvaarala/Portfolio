import About from "./_components/About";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6">
      <Hero />
      <About />
      {/* Placeholders so the hero buttons have anchor targets; filled in later. */}
      <section id="projects" aria-label="Projects" className="scroll-mt-8" />
      <section id="contact" aria-label="Contact" className="scroll-mt-8" />
    </main>
  );
}
