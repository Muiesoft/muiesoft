# Pack e-Terra: când putem marca revenirea

Nu inventăm uptime. Actualizează registry/incident/editorial/award **doar** după un anunț oficial clar că e-Terra e disponibilă public (nu doar „estimare săptămâna viitoare”).

## Checklist

1. Surse: comunicat Guvern/ANCPI + o sursă de presă care îl parafrazează.
2. [`src/data/registry/services.ts`](../src/data/registry/services.ts): `ancpi-ro` → `status: "operational"` doar dacă serviciile esențiale sunt anunțate ca disponibile; rescrie summary la prezent.
3. Incident `inc-ancpi-eterra-ransomware-2026-07`: păstrează istoricul; adaugă pas/sursă de revenire; summary poate nota perioada de offline + data revenirii.
4. Editorial `ancpi-eterra-ransomware-2026-07`: tense trecut unde e cazul.
5. Premiul „Cartea Funciară de Buzunar”: citation la trecut („a fost offline…”).
6. Verifică verdictul probei `ancpi-eterra` din `probes.json` (URL `https://eterra3.ancpi.ro`) după următorul run GH Actions; nu forța `ok` manual.

## Ce e deja pregătit

- Probă suplimentară `ancpi-eterra` în `scripts/probe.mjs`
- Incidentul citează estimarea de redeschidere etapizată (august 2026) fără a o trata ca uptime
