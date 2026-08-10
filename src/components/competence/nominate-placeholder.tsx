"use client";

import { ComingSoonModal } from "@/components/shared/coming-soon-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useComingSoon } from "@/hooks/use-coming-soon";

export function ComingSoonNominate() {
  const soon = useComingSoon("competenta.nominations");

  return (
    <div className="border border-border p-6">
      <Badge variant="planned">NOMINALIZARE</Badge>
      <h3 className="font-display mt-3 text-xl uppercase">
        Propune un exemplu pozitiv
      </h3>
      <p className="mt-3 text-sm text-muted">
        Flow rezervat: nominalizare → criterii → surse → publicare sau
        respingere motivată.
      </p>
      <div className="mt-5">
        <Button type="button" variant="secondary" onClick={soon.show}>
          Deschide formularul
        </Button>
      </div>
      <ComingSoonModal
        open={soon.open}
        onClose={soon.hide}
        title={soon.title}
        willDo={soon.willDo}
        missing={soon.missing}
        help={soon.help}
      />
    </div>
  );
}
