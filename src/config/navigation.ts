import type { FeatureKey } from "./features";

export type NavItem = {
  label: string;
  href: string;
  feature?: FeatureKey;
  title?: string;
};

export const mainNav: NavItem[] = [
  { label: "MUIEINDEX", href: "/muie-index", feature: "muieIndex" },
  { label: "MUIELEX", href: "/lex", feature: "muieLex" },
  { label: "REZOLVĂ", href: "/rezolva", feature: "rezolva" },
  { label: "BANII", href: "/bani", feature: "money" },
  {
    label: "LEGEA 544",
    href: "/544",
    feature: "freedom544",
    title:
      "Legea 544/2001: dreptul de a cere instituțiilor publice informații de interes public",
  },
  { label: "CONTRIBUIE", href: "/contribuie", feature: "contribuie" },
];

export const commandPaletteItems: NavItem[] = [
  { label: "MuieIndex", href: "/muie-index", feature: "muieIndex" },
  { label: "MuieLex", href: "/lex", feature: "muieLex" },
  { label: "Rezolvă-mi dracu problema", href: "/rezolva", feature: "rezolva" },
  { label: "Unde-s banii?", href: "/bani", feature: "money" },
  { label: "Dă cu 544", href: "/544", feature: "freedom544" },
  { label: "Bounties", href: "/bounties", feature: "bounties" },
  { label: "Premii", href: "/premii", feature: "premii" },
  { label: "Manifest", href: "/manifest", feature: "manifest" },
  { label: "Transparență", href: "/transparenta", feature: "transparenta" },
  { label: "Harta", href: "/harta", feature: "harta" },
  { label: "Competență", href: "/competenta", feature: "competenta" },
  { label: "Principii", href: "/principii", feature: "principii" },
  { label: "Status", href: "/status", feature: "status" },
  { label: "Changelog", href: "/changelog", feature: "changelog" },
  { label: "API", href: "/api", feature: "api" },
  { label: "Contribuie", href: "/contribuie", feature: "contribuie" },
  { label: "Ediție", href: "/editie" },
];

export const footerNav = {
  proiect: [
    { label: "Manifest", href: "/manifest" },
    { label: "Principii", href: "/principii" },
    { label: "Ediție", href: "/editie" },
    { label: "Transparență", href: "/transparenta" },
    { label: "Changelog", href: "/changelog" },
  ],
  unelte: [
    { label: "MuieIndex", href: "/muie-index" },
    { label: "MuieLex", href: "/lex" },
    { label: "Bani", href: "/bani" },
    { label: "Legea 544", href: "/544" },
  ],
  cod: [
    { label: "API", href: "/api" },
    { label: "Contribuie", href: "/contribuie" },
    { label: "Status", href: "/status" },
    { label: "Privacy", href: "/privacy" },
  ],
} as const;
