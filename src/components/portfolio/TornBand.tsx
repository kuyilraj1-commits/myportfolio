import { images, profile } from "./data";

const words = ["Video Editor", "Freelancer", profile.year, profile.name];

export function TornBand() {
  return (
    <section className="relative my-10 select-none">
      <div className="torn-top torn-bottom relative overflow-hidden bg-ink py-14 sm:py-20">
        <div className="marquee-track font-display text-[clamp(3rem,11vw,8rem)] leading-none uppercase text-paper/95">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center">
              {words.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center">
                  <span className="px-6">{word}</span>
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <img
        src={images.portrait}
        alt={`Portrait of ${profile.name}`}
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute bottom-0 left-1/2 w-48 -translate-x-1/2 drop-shadow-[0_0_0_var(--accent)] sm:w-72"
        style={{
          filter:
            "drop-shadow(4px 0 0 var(--accent)) drop-shadow(-4px 0 0 var(--accent)) drop-shadow(0 4px 0 var(--accent)) drop-shadow(0 -4px 0 var(--accent))",
        }}
      />
    </section>
  );
}
