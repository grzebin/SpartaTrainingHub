// VIVAZEN Sales Studio
// Master Product Database — Version 0.2

import energyBottle from '../assets/sales-studio/products/energy-focus-bottle.png'
import energyDisplay from '../assets/sales-studio/products/energy-focus-display.png'

import strongBottle from '../assets/sales-studio/products/strong-relief-bottle.png'
import strongDisplay from '../assets/sales-studio/products/strong-relief-display.png'

import stressBottle from '../assets/sales-studio/products/stress-relief-bottle.png'
import stressDisplay from '../assets/sales-studio/products/stress-relief-display.png'

// PRODUCT DATA STRUCTURE

export interface SalesStudioProduct {
  id: string
  name: string
  category: string
  status: 'active' | 'inactive'

  colors: {
    primary: string
    secondary: string
    dark: string
    light: string
    neutral: string
  }

  images: {
    bottle: string
    display: string
  }

  specifications: {
    volumeMl: number
    volumeOz: number
    servingsPerBottle: number
    servingSizeMl: number
    bottlesPerDisplay: number
    displaysPerCase: number
    minimumAge: number
  }

  formulation: {
    mitMgPerServing: number
    blendMgPerServing: number
    blendName: string
    kavaExtractMgPerServing?: number
    kavaStandardization?: number
    lTheanineMgPerServing?: number
  }

  marketing: {
    description: string
    benefits: string[]
    approvalStatus: 'draft' | 'approved'
  }

  pricing: {
    wholesalePerDisplay: number
    suggestedRetailPerBottle: number
    currency: 'USD'
  }
}

// MASTER PRODUCT RECORDS

export const salesStudioProducts: SalesStudioProduct[] = [
  {
    id: 'energy-focus',
    name: 'Energy + Focus',
    category: 'Core',
    status: 'active',

    colors: {
      primary: '#E41F26',
      secondary: '#FC645C',
      dark: '#A80000',
      light: '#FDE9E9',
      neutral: '#171717',
    },

    images: {
      bottle: energyBottle,
      display: energyDisplay,
    },

    specifications: {
      volumeMl: 56,
      volumeOz: 1.9,
      servingsPerBottle: 2,
      servingSizeMl: 28,
      bottlesPerDisplay: 12,
      displaysPerCase: 12,
      minimumAge: 21,
    },

    formulation: {
      mitMgPerServing: 20,
      blendMgPerServing: 500,
      blendName: 'Proprietary Herbal Blend',
    },

    marketing: {
      description: '',
      benefits: [],
      approvalStatus: 'draft',
    },

    pricing: {
      wholesalePerDisplay: 30,
      suggestedRetailPerBottle: 4.99,
      currency: 'USD',
    },
  },

  {
    id: 'strong-relief',
    name: 'Strong Relief',
    category: 'Core',
    status: 'active',

    colors: {
      primary: '#636770',
      secondary: '#BFC3C5',
      dark: '#171717',
      light: '#F0F1F2',
      neutral: '#171717',
    },

    images: {
      bottle: strongBottle,
      display: strongDisplay,
    },

    specifications: {
      volumeMl: 56,
      volumeOz: 1.9,
      servingsPerBottle: 4,
      servingSizeMl: 14,
      bottlesPerDisplay: 12,
      displaysPerCase: 12,
      minimumAge: 21,
    },

    formulation: {
      mitMgPerServing: 20,
      blendMgPerServing: 275,
      blendName: 'Proprietary Herbal Blend',
    },

    marketing: {
      description: '',
      benefits: [],
      approvalStatus: 'draft',
    },

    pricing: {
      wholesalePerDisplay: 48,
      suggestedRetailPerBottle: 7.99,
      currency: 'USD',
    },
  },

  {
    id: 'stress-relief',
    name: 'Stress Relief',
    category: 'Core',
    status: 'active',

    colors: {
      primary: '#1D67B2',
      secondary: '#3CC4F4',
      dark: '#084B80',
      light: '#E8F7FC',
      neutral: '#171717',
    },

    images: {
      bottle: stressBottle,
      display: stressDisplay,
    },

    specifications: {
      volumeMl: 56,
      volumeOz: 1.9,
      servingsPerBottle: 2,
      servingSizeMl: 28,
      bottlesPerDisplay: 12,
      displaysPerCase: 12,
      minimumAge: 21,
    },

    formulation: {
      mitMgPerServing: 20,
      blendMgPerServing: 285,
      blendName: 'Adaptogen Blend',
      kavaExtractMgPerServing: 867,
      kavaStandardization: 30,
      lTheanineMgPerServing: 100,
    },

    marketing: {
      description: '',
      benefits: [],
      approvalStatus: 'draft',
    },

    pricing: {
      wholesalePerDisplay: 48,
      suggestedRetailPerBottle: 7.99,
      currency: 'USD',
    },
  },
]

// DERIVED PRODUCT SPECIFICATIONS

export function getProductSpecifications(
  product: SalesStudioProduct
) {
  const specs = product.specifications
  const formula = product.formulation

  return {
    mitMgPerBottle:
      formula.mitMgPerServing * specs.servingsPerBottle,

    blendMgPerBottle:
      formula.blendMgPerServing * specs.servingsPerBottle,

    kavaExtractMgPerBottle:
      (formula.kavaExtractMgPerServing ?? 0) *
      specs.servingsPerBottle,

    lTheanineMgPerBottle:
      (formula.lTheanineMgPerServing ?? 0) *
      specs.servingsPerBottle,

    bottlesPerCase:
      specs.bottlesPerDisplay * specs.displaysPerCase,
  }
}

// PRODUCT LOOKUP

export function getSalesStudioProduct(id: string) {
  return salesStudioProducts.find(
    (product) => product.id === id
  )
}
