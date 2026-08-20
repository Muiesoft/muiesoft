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
    description: "Indice de frecare pentru portaluri publice. Scor mare = mai multă coadă.",
  },
  harta: {
    mode: "preview",
    label: "Harta",
    href: "/harta",
    description: "Harta portalurilor publice.",
  },
  rezolva: {
    mode: "preview",
    label: "Rezolvă",
    href: "/rezolva",
    description: "Pași administrativi, cu surse.",
  },
  muieLex: {
    mode: "preview",
    label: "MuieLex",
    href: "/lex",
    description: "Legea, pe românește, cu surse.",
  },
  money: {
    mode: "preview",
    label: "Unde-s banii?",
    href: "/bani",
    description: "Contracte publice, cu provenance.",
  },
  freedom544: {
    mode: "live",
    label: "Dă cu 544",
    href: "/544",
    description: "Statul are informația. Tu ai dreptul să întrebi.",
  },
  api: {
    mode: "live",
    label: "România.API",
    href: "/api",
    description: "România, dar cu API.",
  },
  bounties: {
    mode: "planned",
    label: "Bounties",
    href: "/bounties",
    description: "Crowdfunding închis. €0 procesați.",
  },
  premii: {
    mode: "preview",
    label: "Premii",
    href: "/premii",
    description: "Excelență în administrația care se crede digitală.",
  },
  competenta: {
    mode: "planned",
    label: "Competență",
    href: "/premii",
    description: "Nicio scuză. Bravo. Până avem cazuri, e la Premii.",
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
    description: "Cetățean, jurnalist, funcționar, developer: fiecare are o treabă.",
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
    description: "Fapte înainte de acuzații.",
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
    label: "Întreabă MuieLex",
    href: "/lex",
    description: "AI legal: retrieval înainte de răspuns.",
  },
  romaniaApi: {
    mode: "live",
    label: "romania.api",
    href: "/api",
    description: "API public read-only pentru date civice.",
  },
};

export function getFeature(key: FeatureKey): FeatureDefinition {
  return features[key];
}

export function isFeatureInteractive(mode: FeatureMode): boolean {
  return mode === "live" || mode === "preview";
}
