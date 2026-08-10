import {
  freedom544Directory,
  freedom544Templates,
} from "@/data/registry/institutions-544";

export type Freedom544TemplateId = (typeof freedom544Templates)[number]["id"];

const targetAliases: Record<string, string> = {
  "autoritatea pentru digitalizarea romaniei (adr)":
    "ADR (Autoritatea pentru Digitalizarea României)",
  "autoritatea pentru digitalizarea romaniei":
    "ADR (Autoritatea pentru Digitalizarea României)",
  adr: "ADR (Autoritatea pentru Digitalizarea României)",
  "anaf / spatiul privat virtual": "ANAF",
  anaf: "ANAF",
  "onrc / portal firme": "ONRC",
  onrc: "ONRC",
  "cnpp / casa de pensii": "CNPP",
  "cnpp (pensii)": "CNPP",
  cnpp: "CNPP",
  "ministerul finantelor": "Ministerul Finanțelor",
  "ministerul justitiei": "Ministerul Justiției",
  "ministerul afacerilor interne": "Ministerul Afacerilor Interne",
  mai: "Ministerul Afacerilor Interne",
  "ministerul muncii si solidaritatii sociale":
    "Ministerul Muncii și Solidarității Sociale",
  "ghiseul.ro": "Ghișeul.ro",
  ghiseul: "Ghișeul.ro",
  "legislatie.just.ro": "legislatie.just.ro",
  "data.gov.ro": "data.gov.ro",
  "portal.just.ro": "portal.just.ro",
  "depabd (evidenta persoanelor)": "DEPABD",
  depabd: "DEPABD",
  "autoritatea electorala permanenta": "Autoritatea Electorală Permanentă",
  aep: "Autoritatea Electorală Permanentă",
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

export function resolve544Target(institutionName: string): string {
  const key = normalize(institutionName);
  if (targetAliases[key]) return targetAliases[key];
  const exact = freedom544Directory.find(
    (item) => normalize(item.name) === key,
  );
  if (exact) return exact.name;
  const partial = freedom544Directory.find(
    (item) =>
      key.includes(normalize(item.name)) ||
      normalize(item.name).includes(key),
  );
  return partial?.name ?? institutionName;
}

export function buildFreedom544Href(options: {
  template?: Freedom544TemplateId;
  target?: string;
  name?: string;
  question?: string;
}): string {
  const params = new URLSearchParams();
  const template =
    freedom544Templates.find((t) => t.id === options.template) ??
    freedom544Templates[0];
  const name = options.name?.trim() || "…";
  const question =
    options.question?.trim() ||
    template.question.replace("[NUME]", name);

  params.set("q", question);
  params.set("template", template.id);
  if (options.target?.trim()) {
    params.set("target", resolve544Target(options.target));
  }
  if (options.name?.trim()) {
    params.set("name", options.name.trim());
  }
  return `/544?${params.toString()}`;
}

export function isFreedom544TemplateId(
  value: string | undefined,
): value is Freedom544TemplateId {
  return freedom544Templates.some((t) => t.id === value);
}
