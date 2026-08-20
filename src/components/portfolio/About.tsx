import { education, experience, images, profile, skills } from "./data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="select-frame handle-dots mx-auto w-40 self-start sm:w-52">
          <img
            src={images.figure}
            alt={`${profile.name} standing, full body`}
            width={768}
            height={1280}
            loading="lazy"
            className="w-full"
          />
        </div>

        <div>
          <h2 className="font-display text-5xl uppercase sm:text-6xl">Hello</h2>
          <p className="mt-4 text-sm font-700">Hi, I'm {profile.name}.</p>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {profile.bio.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <h3 className="font-display mt-8 text-3xl uppercase sm:text-4xl">Education</h3>
          {education.map((item) => (
            <div key={item.title} className="mt-3">
              <p className="text-sm font-700">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-3xl uppercase sm:text-4xl">Skills</h3>
          <ul className="mt-4 grid grid-cols-3 gap-3">
            {skills.map((skill) => (
              <li
                key={skill.code}
                title={skill.label}
                className="flex aspect-square items-center justify-center rounded-md bg-ink text-lg font-700 text-paper shadow-sm"
              >
                <span className="text-accent">{skill.code}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-display mt-8 text-3xl uppercase sm:text-4xl">Experience</h3>
          <ul className="mt-4 space-y-4">
            {experience.map((job) => (
              <li key={job.title}>
                <p className="font-cond text-sm font-600 tracking-widest uppercase">
                  {job.period}
                </p>
                <p className="text-sm font-700">{job.title}</p>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
