import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { brandCopy } from "@/config/copy";

export function FinalCta() {
  return (
    <Section invert className="border-b-0">
      <h2 className="font-display text-5xl leading-[0.95] font-bold tracking-tight uppercase md:text-7xl">
        Fork România.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-background/80">
        România nu este un startup.
        <br />
        Dar are destule bug-uri cât pentru unul.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/contribuie" variant="invert">
          Contribuie
        </Button>
        <Button
          href="/manifest"
          className="border-background/40 text-background hover:border-background hover:bg-background hover:text-acid"
          variant="secondary"
        >
          Citește manifestul
        </Button>
      </div>
      <p className="font-display mt-16 text-3xl font-bold tracking-tight uppercase md:text-5xl">
        {brandCopy.slogan}.
      </p>
    </Section>
  );
}
