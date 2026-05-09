import { cn } from '@/lib/utils'

export function Terminal({
  title = '~/domantas',
  children,
  className,
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-foreground/10 bg-card shadow-2xl shadow-black/20',
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-foreground/10 bg-foreground/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-term-red" />
        <span className="h-3 w-3 rounded-full bg-term-amber" />
        <span className="h-3 w-3 rounded-full bg-term-green" />
        <span className="ml-3 font-mono text-xs text-foreground/40">
          {title}
        </span>
      </div>
      <div className="font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

export function Prompt({
  cwd = '~/domantas',
  children,
  className,
}: {
  cwd?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className="text-term-green">➜</span>
      <span className="text-term-cyan">{cwd}</span>
      <span className="text-foreground/90">{children}</span>
    </div>
  )
}

export function Cursor() {
  return (
    <span
      className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-term-green"
      style={{ animation: 'blink 1.1s step-end infinite' }}
    />
  )
}
