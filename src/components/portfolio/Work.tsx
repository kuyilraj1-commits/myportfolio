import { projects } from "./data";
import { useCallback } from "react";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-foreground pb-3">
        <h2 className="font-display text-4xl uppercase sm:text-5xl">Selected Work</h2>
        <div className="flex items-center gap-3">
          <span className="font-cond text-sm font-600 tracking-[0.2em] uppercase text-muted-foreground">
            {projects.length} projects
          </span>
          <button
            onClick={useCallback(() => {
              try {
                document.querySelectorAll("video").forEach((v) => {
                  try {
                    (v as HTMLVideoElement).muted = false;
                    (v as HTMLVideoElement).volume = 1;
                  } catch (e) {
                    /* ignore */
                  }
                });
              } catch (err) {
                /* ignore */
              }
            }, [])}
            className="rounded-md border px-3 py-1 text-sm"
          >
            Enable Audio
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`group relative bg-card p-3 shadow-md transition-transform duration-300 hover:-translate-y-1 ${
              i % 2 ? "rotate-1" : "-rotate-1"
            } hover:rotate-0`}
          >
            <span className="absolute -top-3 left-6 h-6 w-20 rotate-[-4deg] bg-muted/90 shadow-sm" />
            <div className="overflow-hidden">
              {String(project.src).includes(".mp4") ? (
                <video
                  src={project.src}
                  controls
                  playsInline
                  onMouseDown={(e) => {
                    try {
                      (e.currentTarget as HTMLVideoElement).muted = false;
                      (e.currentTarget as HTMLVideoElement).volume = 1;
                    } catch (err) {
                      /* ignore */
                    }
                  }}
                  onClick={(e) => {
                    try {
                      (e.currentTarget as HTMLVideoElement).muted = false;
                      (e.currentTarget as HTMLVideoElement).volume = 1;
                    } catch (err) {
                      /* ignore */
                    }
                  }}
                  onPlay={(e) => {
                    try {
                      (e.currentTarget as HTMLVideoElement).muted = false;
                      (e.currentTarget as HTMLVideoElement).volume = 1;
                    } catch (err) {
                      /* ignore */
                    }
                  }}
                  className="w-full object-cover aspect-[9/16] transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={project.src}
                  alt={`${project.title} — ${project.category}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-2">
              <h3 className="font-cond text-xl font-700 tracking-wide uppercase">
                {project.title}
              </h3>
              <span className="font-cond text-sm tracking-widest text-accent">{project.year}</span>
            </div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              {project.category}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
