import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Domantas',
  description: 'Pokalbių botas, kuris atsako už mane.',
}

export default function ChatPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Coming soon
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          AI Domantas
        </h1>
        <p className="text-base text-foreground/70">
          Pokalbių botas, kuris atsako už mane, kai manęs nėra. Statomas su
          Anthropic API. Atsiras savaitę 9.
        </p>
      </div>

      <div className="mt-12 rounded-lg border border-foreground/10 bg-foreground/5 p-6 font-mono text-xs text-foreground/50">
        TODO: chat UI, streaming, RAG iš asmeninių dokumentų, rate limiting.
      </div>
    </main>
  )
}
