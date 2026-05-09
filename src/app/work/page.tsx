import type { Metadata } from 'next'
import Link from 'next/link'
import { work } from '@/data/work'
import { projects } from '@/data/projects'
import { Terminal, Prompt, Cursor } from '@/components/shared/Terminal'

export const metadata: Metadata = {
  title: 'Darbai',
  description: 'Darbo patirtis ir projektai.',
}

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Terminal title="~/domantas/work — zsh">
        <div className="space-y-6 px-5 py-6">
          <Prompt cwd="~/domantas/work">
            <span className="text-term-amber">ls</span>{' '}
            <span className="text-term-magenta">--patirtis</span>
          </Prompt>

          <ul className="space-y-1.5">
            {work.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 rounded px-2 py-1.5 transition-colors hover:bg-term-cyan/10"
                >
                  <span className="text-term-cyan group-hover:text-term-cyan">
                    drwxr-xr-x
                  </span>
                  <span className="flex items-baseline gap-2 text-foreground">
                    <span className="font-medium">{item.slug}</span>
                    <span className="hidden text-foreground/50 sm:inline">
                      {item.role} @ {item.company}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 text-term-green">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-term-green" />
                        active
                      </span>
                    )}
                  </span>
                  <span className="text-term-amber">{item.period}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Prompt cwd="~/domantas/work">
            <span className="text-term-amber">ls</span>{' '}
            <span className="text-term-magenta">--projektai</span>
          </Prompt>

          <ul className="space-y-1.5">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 rounded px-2 py-1.5 transition-colors hover:bg-term-magenta/10"
                >
                  <span className="text-term-magenta">-rw-r--r--</span>
                  <span className="flex items-baseline gap-2 text-foreground">
                    <span className="font-medium">{p.slug}</span>
                    <span className="hidden text-foreground/50 sm:inline">
                      {p.summary}
                    </span>
                  </span>
                  <span className="text-term-amber">{p.year}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Prompt cwd="~/domantas/work">
            <Cursor />
          </Prompt>
        </div>
      </Terminal>

      <p className="mt-6 text-center font-mono text-xs text-foreground/40">
        Spausk bet kurią eilutę, kad pamatytum daugiau.
      </p>
    </main>
  )
}
