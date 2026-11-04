import About from "./_components/About";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
