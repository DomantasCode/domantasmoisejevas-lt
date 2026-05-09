import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
        404
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight md:text-5xl">
        Puslapis nerastas
      </h1>
      <p className="mt-4 text-foreground/70">
        Tokio puslapio čia nėra arba jis dar nepastatytas.
      </p>
      <Link
        href="/"
        className="mt-8 font-mono text-sm text-foreground/80 underline-offset-4 hover:underline"
      >
        ← Į pradžią
      </Link>
    </main>
  )
}
