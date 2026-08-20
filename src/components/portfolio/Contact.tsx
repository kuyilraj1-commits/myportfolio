import { profile } from "./data";

export function Contact() {
  return (
    <footer id="contact" className="torn-top mt-10 bg-ink px-5 pt-20 pb-10 text-paper">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.6rem,11vw,8rem)] leading-[0.85] uppercase">
          Let's <span className="text-accent">work</span> together
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="font-cond mt-8 inline-block text-2xl font-600 tracking-widest uppercase underline decoration-accent decoration-4 underline-offset-8 transition-colors hover:text-accent sm:text-3xl"
        >
          {profile.email}
        </a>

        <a
          href={`tel:+918590881058`}
          className="block mt-2 font-cond text-lg tracking-widest uppercase transition-colors hover:text-accent sm:text-xl"
        >
          +918590881058
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="font-cond text-sm font-600 tracking-[0.2em] uppercase text-paper/70 transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-14 text-xs tracking-widest uppercase text-paper/50">
          © {profile.year} {profile.name} — Portfolio
        </p>
      </div>
    </footer>
  );
}
