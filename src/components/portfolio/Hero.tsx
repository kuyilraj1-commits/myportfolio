import { profile } from "./data";
import { CurvedArrow, FaceBadge, Sparkles } from "./Doodles";

export function Hero() {
  return (
    <header className="paper-grain mx-auto max-w-6xl px-5 pt-12 pb-6 sm:pt-20">
      <p className="font-cond text-xl font-600 tracking-[0.18em] uppercase sm:text-2xl">
        {profile.role}
      </p>

      <div className="relative flex items-center justify-between gap-2">
        <h1 className="font-display flex w-full items-center justify-between text-[clamp(3.2rem,13vw,10.5rem)] leading-[0.82] tracking-tight uppercase">
          <span>Portf</span>
          <FaceBadge className="h-[0.78em] w-[0.78em] shrink-0 text-foreground" />
          <span>lio</span>
        </h1>
        <span className="font-cond absolute -top-1 right-0 text-base font-600 tracking-widest sm:text-xl">
          {profile.year}
        </span>
      </div>

      <div className="relative mt-2 h-16 sm:h-20">
        <CurvedArrow className="absolute left-[46%] h-12 w-24 text-foreground" />
        <span className="font-hand absolute left-[calc(46%+5.5rem)] top-4 text-2xl sm:text-3xl">
          {profile.name}
        </span>
      </div>

      <Sparkles className="mt-2 h-8 w-40 text-foreground sm:h-10 sm:w-52" />
    </header>
  );
}
