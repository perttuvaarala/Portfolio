export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-8 py-16"
    >
      <h2 id="about-heading" className="text-2xl font-semibold sm:text-3xl">
        About
      </h2>
      <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed">
        <p>
          I&apos;m a software engineer with a Bachelor of Engineering in ICT
          from Metropolia University of Applied Sciences, now studying for a
          Master&apos;s in Computer Science at Aalto University, majoring in Web
          Technologies, Applications and Science with a minor in Secure
          Systems.
        </p>
        <p>
          I enjoy full stack work, from front-end interfaces to back-end APIs,
          and I&apos;m especially interested in building software that is
          secure, well tested and reliable in production.
        </p>
      </div>
    </section>
  );
}
