import Link from "next/link";
import { LoginForm } from "@/components/layout/login-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Intră",
  description: "Autentificare în contul Muiesoft.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-14 md:px-8">
      <LoginForm />
      <p className="mt-10">
        <Link
          href="/"
          className="font-mono text-xs tracking-wider text-muted uppercase hover:text-acid"
        >
          ← Înapoi pe site
        </Link>
      </p>
    </div>
  );
}
