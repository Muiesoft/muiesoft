"use client";

import { useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";

const phrases: Record<string, string> = {
  "vom reveni cu un răspuns în cel mai scurt timp": "nu știm când",
  "vom analiza cu celeritate": "am băgat mailul într-un folder",
  "în vederea eficientizării": "urmează încă un formular",
  "platformă digitală integrată":
    "sunt trei site-uri și nu vorbesc între ele",
  "procedură simplificată": "PDF nou",
  "transformare digitală": "am pus un banner pe site",
  "interoperabilitate": "încă trimiți același act de trei ori",
  "once-only principle": "once, plus încă o dată la ghișeu",
  "soluție end-to-end": "se termină când se termină hârtia",
  "experiență fluidă a utilizatorului": "loading infinit + captcha",
  "disponibil 24/7": "exceptând weekend, nopți și zile cu soare",
  "modernizare infrastructură": "server nou, formular vechi",
  "optimizarea resurselor": "mai puțini oameni, aceleași drumuri",
  "transparență totală": "PDF scanat, neindexat, pe un FTP",
  "consultare publică": "formular deschis 48h, anunțat ieri",
  "în conformitate cu standardele europene": "am citit un slide",
  "portal unic": "încă un login pe care îl uiți",
  "semnătură electronică facilitată": "cumpără token, instalează driver, plângi",
  "reluați procedura": "am pierdut dosarul",
  "nu există temei legal": "nu vrem să răspundem",
};

const options = Object.keys(phrases);

export function BullshitTranslator() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div
      className="border border-border bg-surface p-6"
      data-testid="bullshit-translator"
    >
      <div className="flex flex-wrap items-center gap-3">
        <p className="terminal-label mb-0">Corporate Bullshit Translator</p>
        <DemoBadge label="SATIRĂ" />
      </div>
      <label htmlFor="bullshit-select" className="mt-4 block text-sm text-muted">
        Selectează o formulare
      </label>
      <select
        id="bullshit-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm outline-none focus:border-acid"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="mt-6 border border-acid/40 bg-acid/5 p-4">
        <p className="terminal-label text-acid">Pe românește</p>
        <p className="mt-2 text-lg">{phrases[selected]}</p>
      </div>
    </div>
  );
}
