export interface PricingInput {
  wholesalePerDisplay: number
  suggestedRetailPerBottle: number
  bottlesPerDisplay: number
  displaysPerCase: number
}

export function calculatePricing(input: PricingInput) {
  const {
    wholesalePerDisplay,
    suggestedRetailPerBottle,
    bottlesPerDisplay,
    displaysPerCase,
  } = input

  if (
    !Object.values(input).every(Number.isFinite) ||
    wholesalePerDisplay < 0 ||
    suggestedRetailPerBottle < 0 ||
    !Number.isInteger(bottlesPerDisplay) ||
    bottlesPerDisplay <= 0 ||
    !Number.isInteger(displaysPerCase) ||
    displaysPerCase <= 0
  ) {
    throw new Error('Invalid pricing inputs')
  }

  const wholesalePerBottle =
    wholesalePerDisplay / bottlesPerDisplay

  const wholesalePerCase =
    wholesalePerDisplay * displaysPerCase

  const retailRevenuePerDisplay =
    suggestedRetailPerBottle * bottlesPerDisplay

  const grossProfitPerBottle =
    suggestedRetailPerBottle - wholesalePerBottle

  const grossProfitPerDisplay =
    retailRevenuePerDisplay - wholesalePerDisplay

  const grossMargin =
    retailRevenuePerDisplay > 0
      ? (grossProfitPerDisplay / retailRevenuePerDisplay) * 100
      : null

  return {
    wholesalePerDisplay,
    wholesalePerBottle,
    wholesalePerCase,
    suggestedRetailPerBottle,
    retailRevenuePerDisplay,
    grossProfitPerBottle,
    grossProfitPerDisplay,
    grossMargin,
  }
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export function formatPercentage(value: number | null) {
  return value === null ? 'N/A' : `${value.toFixed(1)}%`
}