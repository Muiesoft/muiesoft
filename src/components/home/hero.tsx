import { BrandMark } from "@/components/brand/brand-mark";
import { Button } from "@/components/ui/button";
import { brandCopy } from "@/config/copy";

export function HomeHero() {
  return (
    <section className="relative border-b border-border px-4 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--ro-blue)_0_33%,var(--ro-yellow)_33%_66%,var(--ro-red)_66%_100%)] opacity-40" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="reveal mb-6">
          <BrandMark size="lg" priority />
        </div>
        <h1 className="font-display reveal text-5xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
          Muiesoft
        </h1>
        <p className="font-display reveal mt-6 text-2xl leading-snug md:text-3xl">
          {brandCopy.slogan}
        </p>
        <p className="reveal mt-8 max-w-2xl text-lg text-muted md:text-xl">
          {brandCopy.mission}
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3">
          <Button href="/muie-index">Vezi Muie Index</Button>
          <Button href="/544" variant="secondary">
            Cere informații · 544
          </Button>
        </div>
      </div>
    </section>
  );
}
