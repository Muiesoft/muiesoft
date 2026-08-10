export type FeatureMode = "live" | "preview" | "planned" | "disabled";

export type FeatureKey =
  | "muieIndex"
  | "harta"
  | "rezolva"
  | "muieLex"
  | "money"
  | "freedom544"
  | "api"
  | "bounties"
  | "premii"
  | "competenta"
  | "transparenta"
  | "contribuie"
  | "manifest"
  | "principii"
  | "status"
  | "changelog"
  | "avocatulPulii"
  | "romaniaApi";

export type FeatureDefinition = {
  mode: FeatureMode;
  label: string;
  href: string;
  description: string;
};

export const features: Record<FeatureKey, FeatureDefinition> = {
  muieIndex: {
    mode: "preview",
    label: "MuieIndex",
    href: "/muie-index",
    description: "Măsurarea Uzabilității, Interoperabilității și Eficienței.",
  },
  harta: {
    mode: "preview",
    label: "Harta",
    href: "/harta",
    description: "Harta Națională a Muielii Digitale.",
  },
  rezolva: {
    mode: "preview",
    label: "Rezolvă",
    href: "/rezolva",
    description: "Rezolvă-mi dracu problema.",
  },
  muieLex: {
    mode: "preview",
    label: "MuieLex",
    href: "/lex",
    description: "Legea, fără pula de lemn.",
  },
  money: {
    mode: "preview",
    label: "Unde-s banii?",
    href: "/bani",
    description: "Cât a costat căcatul ăsta?",
  },
  freedom544: {
    mode: "preview",
    label: "Dă cu 544",
    href: "/544",
    description: "Statul are informația. Tu ai dreptul să întrebi.",
  },
  api: {
    mode: "preview",
    label: "România.API",
    href: "/api",
    description: "România, dar cu API.",
  },
  bounties: {
    mode: "preview",
    label: "Bounties",
    href: "/bounties",
    description: "Nu comenta. Pune bounty.",
  },
  premii: {
    mode: "preview",
    label: "Premii",
    href: "/premii",
    description: "Excelență în administrația futută.",
  },
  competenta: {
    mode: "preview",
    label: "Competență",
    href: "/competenta",
    description: "Nicio muie. Bravo.",
  },
  transparenta: {
    mode: "preview",
    label: "Transparență",
    href: "/transparenta",
    description: "Și noi trebuie să fim transparenți.",
  },
  contribuie: {
    mode: "live",
    label: "Contribuie",
    href: "/contribuie",
    description: "Nu comenta de pe margine. Deschide issue.",
  },
  manifest: {
    mode: "live",
    label: "Manifest",
    href: "/manifest",
    description: "Manifest Muiesoft.",
  },
  principii: {
    mode: "live",
    label: "Principii",
    href: "/principii",
    description: "Putem înjura. Nu putem inventa.",
  },
  status: {
    mode: "preview",
    label: "Status",
    href: "/status",
    description: "Starea serviciilor Muiesoft.",
  },
  changelog: {
    mode: "live",
    label: "Changelog",
    href: "/changelog",
    description: "Ce s-a schimbat.",
  },
  avocatulPulii: {
    mode: "planned",
    label: "Avocatul Pulii",
    href: "/lex",
    description: "AI legal: retrieval înainte de răspuns.",
  },
  romaniaApi: {
    mode: "preview",
    label: "romania.api",
    href: "/api",
    description: "API public read-only pentru date civice, în preview.",
  },
};

export function getFeature(key: FeatureKey): FeatureDefinition {
  return features[key];
}

export function isFeatureInteractive(mode: FeatureMode): boolean {
  return mode === "live" || mode === "preview";
}
