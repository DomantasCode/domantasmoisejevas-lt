import Image from 'next/image'

interface PhotoGalleryProps {
  images: string[] | undefined
  alt: string
  /** What folder photos should be dropped into, shown in the empty state */
  emptyHint?: string
}

export function PhotoGallery({ images, alt, emptyHint }: PhotoGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center rounded-lg border border-dashed border-foreground/15 bg-foreground/5 p-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/40">
          Nuotraukos netrukus
        </p>
        {emptyHint && (
          <p className="mt-2 max-w-xs font-mono text-[10px] text-foreground/30">
            {emptyHint}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {images.map((src, i) => (
        <div
          key={src}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10"
        >
          <Image
            src={src}
            alt={`${alt} — ${i + 1}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
