import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 md:px-8">
      <p className="font-mono text-xs tracking-[0.2em] text-danger uppercase">
        Error
      </p>
      <h1 className="font-display mt-4 text-7xl font-bold uppercase md:text-9xl">
        404
      </h1>
      <p className="mt-6 text-lg text-muted">
        Pagina nu există.
        <br />
        Probabil a fost mutată pe alt portal fără redirect.
      </p>
      <div className="mt-10">
        <Button href="/">Înapoi la civilizație</Button>
      </div>
    </div>
  );
}
