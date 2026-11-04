import Image, { type StaticImageData } from "next/image";
import catchMasterLogo from "./project-logos/catchmaster.png";
import exploreHelsinkiLogo from "./project-logos/explore-helsinki.png";
import impulsePassLogo from "./project-logos/impulsepass.png";
import jobelLogo from "./project-logos/jobel.png";
import skiResortLogo from "./project-logos/ski-resort.png";
import voteSmartLogo from "./project-logos/votesmart.png";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

type Project = {
  name: string;
  description: string;
  tech: string[];
  repoUrl: string;
  logo?: StaticImageData;
  // Adjusts logos that would be too dark to see on the dark theme.
  darkLogoClass?: string;
  isGroupProject?: boolean;
};

const projects: Project[] = [
  {
    name: "VoteSmart",
    description:
      "Blockchain-based polling app built on smart contracts and deployed on the Polygon Amoy test network.",
    tech: ["Solidity", "Hardhat", "Next.js", "TypeScript", "wagmi"],
    repoUrl: "https://github.com/perttuvaarala/VoteSmart",
    logo: voteSmartLogo,
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
    logo: catchMasterLogo,
    darkLogoClass: "dark:invert",
    isGroupProject: true,
  },
  {
    name: "Jobel",
    description:
      "A place to share your thoughts anonymously. Built for a web development course at Metropolia UAS.",
    tech: ["React", "TypeScript", "Express", "MongoDB", "Docker"],
    repoUrl: "https://github.com/perttuvaarala/jobel",
    logo: jobelLogo,
    isGroupProject: true,
  },
  {
    name: "ImpulsePass",
    description:
      "Desktop app for following how kide.app events change over time. Users can save events to a personal list and get notified about event and ticket sale dates. Localized into three languages.",
    tech: ["Java 17", "JavaFX", "Maven", "MongoDB", "MariaDB"],
    repoUrl: "https://github.com/perttuvaarala/ImpulsePass",
    logo: impulsePassLogo,
    isGroupProject: true,
  },
  {
    name: "Ski Resort Simulator",
    description:
      "Three-phase simulation of a ski resort that visualizes service points and customer queues. Users can adjust the parameters, and results are saved to a database. Built for a Metropolia course.",
    tech: ["Java", "SQL", "MVC"],
    repoUrl: "https://github.com/perttuvaarala/laskettelukeskus",
    logo: skiResortLogo,
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
    logo: exploreHelsinkiLogo,
    darkLogoClass: "dark:brightness-[2.5]",
    isGroupProject: true,
  },
];

// Fits a logo inside a 120×32px box, so square and wide logos both look balanced.
function fitLogo({ width, height }: StaticImageData) {
  const scale = Math.min(120 / width, 32 / height);
  return {
    width: Math.round(width * scale),
    height: Math.round(height * scale),
  };
}

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
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                {project.isGroupProject && (
                  <p className="mt-1 text-sm text-foreground/70">
                    Group project
                  </p>
                )}
              </div>
              {project.logo && (
                // This box can shrink, so a wide logo gives way to the name on
                // narrow cards.
                <div className="flex h-10 min-w-10 items-center justify-end">
                  {/* Decorative: the project name is right beside it. */}
                  <Image
                    src={project.logo}
                    alt=""
                    {...fitLogo(project.logo)}
                    className={`min-w-0 rounded-sm ${project.darkLogoClass ?? ""}`}
                  />
                </div>
              )}
            </div>
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
