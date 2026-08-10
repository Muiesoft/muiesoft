import Link from "next/link";

export function PlaceholderLink({
  href,
  label = "Deschide →",
}: {
  href: string;
  label?: string;
}) {
  return (
    <p className="mt-6">
      <Link
        href={href}
        className="font-mono text-xs tracking-wider text-acid uppercase hover:underline"
      >
        {label}
      </Link>
    </p>
  );
}
