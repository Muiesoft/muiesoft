"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { ComingSoonModal } from "@/components/shared/coming-soon-modal";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getModulePlaceholder } from "@/config/module-placeholders";
import {
  freedom544Directory,
  freedom544Templates,
} from "@/data/registry/institutions-544";
import { useComingSoon } from "@/hooks/use-coming-soon";
import {
  addFreedom544ArchiveEntry,
  readFreedom544Archive,
  removeFreedom544ArchiveEntry,
  type Freedom544ArchiveEntry,
} from "@/lib/freedom544-archive";
import {
  addFreedom544Reminder,
  readFreedom544Reminders,
  removeFreedom544Reminder,
  type Freedom544Reminder,
} from "@/lib/freedom544-reminders";
import {
  isFreedom544TemplateId,
  type Freedom544TemplateId,
} from "@/lib/freedom544";

function pickTemplate(id?: string) {
  if (id && isFreedom544TemplateId(id)) {
    return freedom544Templates.find((t) => t.id === id) ?? freedom544Templates[0];
  }
  return freedom544Templates[0];
}

function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function statusLabel(status: Freedom544ArchiveEntry["status"]): string {
  if (status === "copied") return "copiată";
  if (status === "reminded") return "cu reminder";
  return "draft";
}

export function Freedom544Wizard({
  initialQuestion,
  initialTemplate,
  initialTarget,
  initialName,
}: {
  initialQuestion?: string;
  initialTemplate?: string;
  initialTarget?: string;
  initialName?: string;
}) {
  const nameToken = initialName?.trim() || "…";
  const startingTemplate = pickTemplate(initialTemplate);
  const prefills = initialQuestion?.trim();
  const isClient = useIsClient();

  const [question, setQuestion] = useState(
    prefills || startingTemplate.question.replace("[NUME]", nameToken),
  );
  const [target, setTarget] = useState(initialTarget?.trim() ?? "");
  const [copied, setCopied] = useState(false);
  const [archiveSaved, setArchiveSaved] = useState(false);
  const [templateId, setTemplateId] = useState<Freedom544TemplateId>(
    startingTemplate.id,
  );
  const [reminders, setReminders] = useState<Freedom544Reminder[] | null>(null);
  const [archive, setArchive] = useState<Freedom544ArchiveEntry[] | null>(null);
  const [reminderSaved, setReminderSaved] = useState(false);
  const soon = useComingSoon("freedom544.automation");
  const reminderList =
    reminders ?? (isClient ? readFreedom544Reminders() : []);
  const archiveList = archive ?? (isClient ? readFreedom544Archive() : []);

  const selectedTarget = useMemo(
    () => freedom544Directory.find((i) => i.name === target),
    [target],
  );

  const letter = `Către: ${target || "[INSTITUȚIA]"}

Subiect: Solicitare informații de interes public (Legea 544/2001)

Stimate/Stimată,

În temeiul Legii 544/2001 privind liberul acces la informațiile de interes public, solicit următoarele informații:

${question || "[întrebarea ta aici]"}

Solicit răspuns în termenul legal, pe email dacă este posibil.

Această cerere a fost generată cu wizard-ul Muiesoft. Nu a fost trimisă automat.

Cu stimă,
[Nume]
[Email]
`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
      <Badge variant="muted" className="print:hidden">
        LEGEA 544/2001 · GENERATOR LOCAL
      </Badge>

      {reminderList.length > 0 ? (
        <section className="mt-6 border border-border p-5 print:hidden">
          <p className="terminal-label">Reminder-e locale</p>
          <p className="mt-2 text-sm text-muted">
            Salvate doar în browserul tău. Nu trimitem email.
          </p>
          <ul className="mt-4 space-y-3">
            {reminderList.map((item) => (
              <li
                key={item.id}
                className="border border-border p-3 font-mono text-xs"
              >
                <p className="text-acid">
                  Termen: {item.dueAt.slice(0, 10)} · {item.target}
                </p>
                <p className="mt-2 text-muted">{item.question}</p>
                <button
                  type="button"
                  className="mt-3 text-muted underline-offset-2 hover:text-acid hover:underline"
                  onClick={() => {
                    removeFreedom544Reminder(item.id);
                    setReminders(readFreedom544Reminders());
                  }}
                >
                  Șterge
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 space-y-6 print:hidden">
        <div>
          <p className="terminal-label">Template cerere</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {freedom544Templates.map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                className={`border px-3 py-2 font-mono text-xs uppercase ${
                  templateId === tpl.id
                    ? "border-acid bg-acid text-background"
                    : "border-border text-muted"
                }`}
                onClick={() => {
                  setTemplateId(tpl.id);
                  setQuestion(tpl.question.replace("[NUME]", nameToken));
                }}
              >
                {tpl.label}
              </button>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="terminal-label">1. Ce vrei să afli?</span>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mt-2 min-h-28 w-full border border-border bg-surface px-4 py-3 outline-none focus:border-acid"
            placeholder="Cât a costat site-ul..."
          />
        </label>
        <label className="block">
          <span className="terminal-label">2. De la cine?</span>
          <input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-2 w-full border border-border bg-surface px-4 py-3 outline-none focus:border-acid"
            placeholder="Instituție"
            list="demo-institutions-544"
          />
          <datalist id="demo-institutions-544">
            {freedom544Directory.map((item) => (
              <option key={item.name} value={item.name} />
            ))}
          </datalist>
        </label>
        <div className="border border-border p-4">
          <p className="terminal-label">Directory instituții (static)</p>
          <ul className="mt-3 space-y-2 font-mono text-xs text-muted">
            {freedom544Directory.map((item) => (
              <li key={item.name} className="flex flex-wrap items-baseline gap-2">
                <button
                  type="button"
                  className="text-left hover:text-acid"
                  onClick={() => setTarget(item.name)}
                >
                  → {item.name}
                </button>
                {item.contactUrl ? (
                  <a
                    href={item.contactUrl}
                    className="text-acid/80 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    site
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
          {selectedTarget?.notes ? (
            <p className="mt-3 text-xs text-muted">{selectedTarget.notes}</p>
          ) : null}
        </div>
      </div>
      <div
        id="freedom544-letter"
        className="mt-8 border border-border bg-surface p-5"
      >
        <p className="terminal-label print:hidden">Cerere generată</p>
        <pre className="mt-4 whitespace-pre-wrap font-mono text-xs text-muted print:mt-0 print:text-sm print:text-black">
          {letter}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3 print:hidden">
          <Button
            type="button"
            variant="secondary"
            onClick={async () => {
              await navigator.clipboard.writeText(letter);
              setCopied(true);
              addFreedom544ArchiveEntry({
                target,
                question,
                letter,
                status: "copied",
              });
              setArchive(readFreedom544Archive());
              setArchiveSaved(true);
            }}
          >
            {copied ? "Copiat" : "Copy to Clipboard"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => window.print()}
          >
            Printează / PDF
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              const slug = (target || "cerere")
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{M}/gu, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")
                .slice(0, 40);
              downloadText(`cerere-544-${slug || "institutie"}.txt`, letter);
            }}
          >
            Descarcă .txt
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              addFreedom544ArchiveEntry({
                target,
                question,
                letter,
                status: "draft",
              });
              setArchive(readFreedom544Archive());
              setArchiveSaved(true);
            }}
          >
            {archiveSaved ? "Salvat în arhivă" : "Salvează în arhiva locală"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              addFreedom544Reminder({ target, question });
              setReminders(readFreedom544Reminders());
              setReminderSaved(true);
              addFreedom544ArchiveEntry({
                target,
                question,
                letter,
                status: "reminded",
              });
              setArchive(readFreedom544Archive());
              setArchiveSaved(true);
            }}
          >
            {reminderSaved ? "Reminder salvat" : "Amintește-mi în 30 de zile"}
          </Button>
          <Button type="button" onClick={soon.show}>
            Trimitere automată: urmează
          </Button>
        </div>
        <div className="mt-4 print:hidden">
          <Badge variant="planned">TRIMITERE AUTOMATĂ: URMEAZĂ</Badge>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 print:hidden">
        <section className="border border-border p-5">
          <Badge variant="muted">LEGEA 544/2001</Badge>
          <h3 className="font-display mt-3 text-xl uppercase">
            Termene și trimitere
          </h3>
          <ul className="mt-4 space-y-2 font-mono text-xs text-muted">
            <li>
              Trimite tu cererea (email / registratură). Nu o trimitem noi încă.
            </li>
            <li>
              Termen tipic: 10 zile, sau până la 30 cu înștiințare (art. 7).
            </li>
            <li>
              Contact instituție:{" "}
              {selectedTarget?.contactUrl ? (
                <a
                  href={selectedTarget.contactUrl}
                  className="text-acid hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedTarget.contactUrl}
                </a>
              ) : (
                "selectează o instituție din directory"
              )}
            </li>
          </ul>
        </section>
        <section className="border border-border p-5">
          <Badge variant="muted">ARHIVĂ LOCALĂ</Badge>
          <h3 className="font-display mt-3 text-xl uppercase">
            Cererile tale
          </h3>
          <p className="mt-4 text-sm text-muted">
            Doar în browserul tău. Fără upload. Arhiva publică machine-readable
            rămâne pe roadmap.
          </p>
          {archiveList.length === 0 ? (
            <p className="mt-4 font-mono text-xs text-muted">
              Nicio cerere salvată încă.
            </p>
          ) : (
            <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto">
              {archiveList.map((item) => (
                <li
                  key={item.id}
                  className="border border-border p-3 font-mono text-xs"
                >
                  <p className="text-acid">
                    {item.createdAt.slice(0, 10)} · {item.target} ·{" "}
                    {statusLabel(item.status)}
                  </p>
                  <p className="mt-2 line-clamp-2 text-muted">{item.question}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="text-muted underline-offset-2 hover:text-acid hover:underline"
                      onClick={() => {
                        setTarget(item.target);
                        setQuestion(item.question);
                        setArchiveSaved(false);
                        setCopied(false);
                      }}
                    >
                      Reîncarcă
                    </button>
                    <button
                      type="button"
                      className="text-muted underline-offset-2 hover:text-acid hover:underline"
                      onClick={() => {
                        removeFreedom544ArchiveEntry(item.id);
                        setArchive(readFreedom544Archive());
                      }}
                    >
                      Șterge
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="mt-16 print:hidden">
        <ModulePlaceholder
          content={getModulePlaceholder("freedom544.automation")}
          badge="PREVIEW"
        />
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
