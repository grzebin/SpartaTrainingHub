// VIVAZEN Sales Studio
// Shared product card configuration

export interface CardConfig {
  showDisplay: boolean
  showDescription: boolean
  showBenefits: boolean
  showIngredients: boolean
  showPackaging: boolean
  showPricing: boolean
  showProfitability: boolean
  showPromotion: boolean
}

export const defaultCardConfig: CardConfig = {
  showDisplay: true,
  showDescription: false,
  showBenefits: false,
  showIngredients: false,
  showPackaging: true,
  showPricing: false,
  showProfitability: false,
  showPromotion: false,
}

export type CardFormat =
  | 'compact'
  | 'wide'
  | 'portrait'
  | 'square'
  | 'tall'
  | 'extra-tall'

export const cardFormats = [
  {
    id: 'compact',
    name: 'Compact',
    width: 914,
    height: 553,
  },
  {
    id: 'wide',
    name: 'Wide',
    width: 2785,
    height: 900,
  },
  {
    id: 'portrait',
    name: 'Portrait',
    width: 900,
    height: 1396,
  },
  {
    id: 'square',
    name: 'Square',
    width: 2753,
    height: 2785,
  },
  {
    id: 'tall',
    name: 'Tall',
    width: 1348,
    height: 2785,
  },
  {
    id: 'extra-tall',
    name: 'Extra Tall',
    width: 900,
    height: 2785,
  },
] as const
