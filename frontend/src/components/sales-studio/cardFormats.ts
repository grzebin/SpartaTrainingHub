export const cardFormats = [
  {
    id: 'compact',
    name: 'Compact',
    width: 914,
    height: 553,
    available: true,
  },
  {
    id: 'wide',
    name: 'Wide',
    width: 2785,
    height: 900,
    available: true,
  },
  {
    id: 'portrait',
    name: 'Portrait',
    width: 900,
    height: 1396,
    available: true,
  },
  {
    id: 'square',
    name: 'Square',
    width: 2753,
    height: 2785,
    available: true,
  },
  {
    id: 'tall',
    name: 'Tall',
    width: 1348,
    height: 2785,
    available: true,
  },
  {
    id: 'extra-tall',
    name: 'Extra Tall',
    width: 900,
    height: 2785,
    available: true,
  },
] as const

export type CardFormatId =
  (typeof cardFormats)[number]['id']
