import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AvocatulPuliiFundingCard() {
  return (
    <div className="border border-border bg-surface p-6" data-testid="avocat-funding">
      <div className="flex flex-wrap gap-2">
        <Badge variant="planned">CROWDFUNDING</Badge>
        <Badge variant="preview">AVOCATUL PULII</Badge>
      </div>
      <h3 className="font-display mt-4 text-2xl uppercase">
        Benzină pentru AI
      </h3>
      <p className="mt-4 font-mono text-3xl text-acid">€0 / €8.000</p>
      <p className="mt-4 text-sm text-muted">
        Întrebările rămân gratuite.
        <br />
        Comunitatea plătește infrastructura, când există ceva de plătit.
      </p>
      <p className="mt-3 text-sm text-muted">
        Nu procesăm bani. Nu există checkout. Cardul e rezervat pentru modelul
        viitor.
      </p>
      <div className="mt-6">
        <Button href="/contribuie" variant="secondary">
          Cum poți ajuta (fără plată)
        </Button>
      </div>
    </div>
  );
}
