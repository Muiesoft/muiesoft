import type { FeatureKey } from "./features";

export type NavItem = {
  label: string;
  href: string;
  feature?: FeatureKey;
  title?: string;
};

export const mainNav: NavItem[] = [
  { label: "Muie Index", href: "/muie-index", feature: "muieIndex" },
  { label: "Harta", href: "/harta", feature: "harta" },
  { label: "MuieLex", href: "/lex", feature: "muieLex" },
  {
    label: "Legea 544",
    href: "/544",
    feature: "freedom544",
    title:
      "Legea 544/2001: dreptul de a cere instituțiilor publice informații de interes public",
  },
  { label: "Contribuie", href: "/contribuie", feature: "contribuie" },
];

export const commandPaletteItems: NavItem[] = [
  { label: "MuieIndex", href: "/muie-index", feature: "muieIndex" },
  { label: "MuieLex", href: "/lex", feature: "muieLex" },
  { label: "Rezolvă", href: "/rezolva", feature: "rezolva" },
  { label: "Unde-s banii?", href: "/bani", feature: "money" },
  { label: "Dă cu 544", href: "/544", feature: "freedom544" },
  { label: "Bounties", href: "/bounties", feature: "bounties" },
  { label: "Premii", href: "/premii", feature: "premii" },
  { label: "Manifest", href: "/manifest", feature: "manifest" },
  { label: "Transparență", href: "/transparenta", feature: "transparenta" },
  { label: "Harta", href: "/harta", feature: "harta" },
  { label: "Principii", href: "/principii", feature: "principii" },
  { label: "Metodologie", href: "/metodologie" },
  { label: "RSS", href: "/feed.xml" },
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
    { label: "Premii", href: "/premii" },
    { label: "Transparență", href: "/transparenta" },
    { label: "Metodologie", href: "/metodologie" },
    { label: "Changelog", href: "/changelog" },
  ],
  unelte: [
    { label: "MuieIndex", href: "/muie-index" },
    { label: "Harta", href: "/harta" },
    { label: "MuieLex", href: "/lex" },
    { label: "Rezolvă", href: "/rezolva" },
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
