import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Conturi",
  description: "Conturile Muiesoft vin când avem ceva de protejat.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-4 py-14 md:px-8">
      <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
        Conturi
      </p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        Conturile vin când avem ce proteja.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Nu colectăm emailuri ca să arătăm ca un produs. Când un modul real cere
        identitate, apare autentificarea. Până atunci, uneltele sunt publice.
      </p>
      <p className="mt-10">
        <Link
          href="/"
          className="font-mono text-xs tracking-wider text-muted hover:text-acid"
        >
          ← Înapoi pe site
        </Link>
      </p>
    </div>
  );
}
