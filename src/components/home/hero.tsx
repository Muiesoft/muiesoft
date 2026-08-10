import { BrandMark } from "@/components/brand/brand-mark";
import { Button } from "@/components/ui/button";
import { brandCopy } from "@/config/copy";

export function HomeHero() {
  return (
    <section className="hero-viewport relative flex flex-col justify-center border-b border-border px-4 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--ro-blue)_0_33%,var(--ro-yellow)_33%_66%,var(--ro-red)_66%_100%)] opacity-40" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="reveal mb-6">
          <BrandMark size="lg" priority />
        </div>
        <h1 className="font-display reveal text-[clamp(3.5rem,14vw,9rem)] leading-[0.85] font-bold tracking-tight uppercase">
          MUIESOFT
        </h1>
        <p className="font-display reveal mt-6 text-[clamp(2rem,7vw,4.5rem)] leading-[0.95] font-bold tracking-tight uppercase">
          Toată hula
          <br />
          sau
          <br />
          <span className="text-acid">toată pula.</span>
        </p>
        <p className="reveal mt-8 max-w-2xl text-lg text-muted md:text-xl">
          O infrastructură civică open-source pentru oamenii care s-au săturat să
          fie beta testeri involuntari ai statului român.
        </p>
        <p className="reveal mt-4 font-display text-xl tracking-tight uppercase md:text-2xl">
          Cetățean privat.
          <br />
          Stat transparent.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3">
          <Button href="/muie-index">Vezi ce e futut</Button>
          <Button href="/contribuie" variant="secondary">
            Fork România
          </Button>
        </div>
        <p className="reveal mt-8 font-mono text-xs tracking-[0.14em] text-muted uppercase">
          {brandCopy.satireTests}
        </p>
      </div>
    </section>
  );
}
