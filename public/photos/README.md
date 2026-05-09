# Photos

Vieta nuotraukoms, kurios rodomos hobių ir kelionių puslapiuose.

## Struktūra

```
photos/
├── hobbies/          # hobių nuotraukos, pvz. skate-1.jpg, wake-313.jpg
└── travels/
    ├── lt/           # pagal šalies kodą (žemu registru)
    ├── it/
    ├── fr/
    └── ...
```

## Kaip pridėti

1. Sumesti JPG/PNG/WebP failus į atitinkamą folder'į.
2. Atidaryti `src/data/hobbies.ts` arba `src/data/countries.ts`.
3. Surasti įrašą (pvz. slug `lentu-sportai` arba code `IT`).
4. Į `images: []` pridėti path nuo `/public`, pvz.:

```ts
images: [
  '/photos/hobbies/skate-1.jpg',
  '/photos/hobbies/wake-313.jpg',
]
```

5. `<PhotoGallery>` automatiškai pradės juos rodyti.

## Patarimai

- Optimizuoti dydį iki ~1600px ilgosios kraštinės prieš įmetant (Next.js dar suspaus).
- WebP arba modernus JPEG (quality ~80) atrodo gerai.
- Vienodos proporcijos vienam komplektui — gražiau atrodo grid'e.
