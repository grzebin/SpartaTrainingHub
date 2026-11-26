export type CardDensity =
  | 'minimal'
  | 'standard'
  | 'detailed'
  | 'dense'

export type CardLayoutOptions = {
  showDescription?: boolean
  showBenefits?: boolean
  showIngredients?: boolean
  showPricing?: boolean
  showProfitability?: boolean
  showPromotion?: boolean
}

export function calculateCardLayout(
  options: CardLayoutOptions
) {
  const activeModules = [
    options.showDescription,
    options.showBenefits,
    options.showIngredients,
    options.showPricing,
    options.showProfitability,
    options.showPromotion,
  ].filter(Boolean).length

  const contentWeight =
    Number(!!options.showDescription) * 1 +
    Number(!!options.showBenefits) * 1 +
    Number(!!options.showIngredients) * 2 +
    Number(!!options.showPricing) * 2 +
    Number(!!options.showProfitability) * 2 +
    Number(!!options.showPromotion) * 2

  const density: CardDensity =
    contentWeight === 0
      ? 'minimal'
      : contentWeight <= 2
        ? 'standard'
        : contentWeight <= 5
          ? 'detailed'
          : 'dense'

  return {
    activeModules,
    contentWeight,
    density,
  }
}