const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

type Project = {
  name: string;
  description: string;
  tech: string[];
  repoUrl: string;
  isGroupProject?: boolean;
};

const projects: Project[] = [
  {
    name: "VoteSmart",
    description:
      "Blockchain-based polling app built on smart contracts and deployed on the Polygon Amoy test network.",
    tech: ["Solidity", "Hardhat", "Next.js", "TypeScript", "wagmi"],
    repoUrl: "https://github.com/perttuvaarala/VoteSmart",
  },
  {
    name: "CatchMaster",
    description:
      "Fishing app where users share their catches and get lure color recommendations based on the current weather. Includes a map, customizable profiles and Google login.",
    tech: [
      "React",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "Express",
      "MongoDB",
      "Jest",
    ],
    repoUrl: "https://github.com/perttuvaarala/CatchMaster",
    isGroupProject: true,
  },
  {
    name: "Jobel",
    description:
      "A place to share your thoughts anonymously. Built for a web development course at Metropolia UAS.",
    tech: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
    repoUrl: "https://github.com/perttuvaarala/jobel",
    isGroupProject: true,
  },
  {
    name: "ImpulsePass",
    description:
      "Desktop app for following how kide.app events change over time. Users can save events to a personal list and get notified about event and ticket sale dates. Localized into three languages.",
    tech: ["Java 17", "JavaFX", "Maven", "MongoDB", "MariaDB"],
    repoUrl: "https://github.com/perttuvaarala/ImpulsePass",
    isGroupProject: true,
  },
  {
    name: "Ski Resort Simulator",
    description:
      "Three-phase simulation of a ski resort that visualizes service points and customer queues. Users can adjust the parameters, and results are saved to a database. Built for a Metropolia course.",
    tech: ["Java", "SQL", "MVC"],
    repoUrl: "https://github.com/perttuvaarala/laskettelukeskus",
    isGroupProject: true,
  },
  {
    name: "Design Patterns",
    description:
      "Java implementations of 16 classic design patterns, including Observer, Strategy, Decorator and Factory Method.",
    tech: ["Java"],
    repoUrl: "https://github.com/perttuvaarala/Suunnittelumallit",
  },
  {
    name: "Explore Helsinki",
    description:
      "Multi-page website about Helsinki with a Wi-Fi map, events, practical tips and a promotional video.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/perttuvaarala/ExploreHelsinki",
    isGroupProject: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-8 py-16"
    >
      <h2 id="projects-heading" className="text-2xl font-semibold sm:text-3xl">
        Projects
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-col rounded-lg border border-foreground/15 p-5"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            {project.isGroupProject && (
              <p className="mt-1 text-sm text-foreground/70">Group project</p>
            )}
            <p className="mt-2 max-w-prose text-base leading-relaxed">
              {project.description}
            </p>
            <ul
              aria-label={`${project.name} technologies`}
              className="mt-3 mb-4 flex flex-wrap gap-2"
            >
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-foreground/20 px-2 py-0.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className={`${focusRing} mt-auto self-start rounded-sm font-medium underline underline-offset-4 hover:text-foreground/70`}
            >
              GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
