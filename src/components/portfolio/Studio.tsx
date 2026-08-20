import { studio } from "./data";

const tilts = ["-rotate-3", "rotate-2", "-rotate-1"];

export function Studio() {
  return (
    <section id="studio" className="mx-auto max-w-6xl px-5 py-16 text-center">
      <h2 className="font-display text-4xl uppercase sm:text-5xl">THE PROCESS</h2>
      <p className="font-hand mt-2 text-xl text-muted-foreground">from camera to final cut</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {studio.map((shot, i) => (
          <figure
            key={shot.caption}
            className={`${tilts[i % tilts.length]} bg-card p-3 pb-10 shadow-md transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
          >
            <img
              src={shot.src}
              alt={shot.caption}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="font-hand mt-3 text-lg">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
