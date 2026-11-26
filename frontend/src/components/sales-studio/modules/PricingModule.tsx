
import {
  Tag,
  Package,
  DollarSign,
} from 'lucide-react'

import { formatCurrency } from '../pricing'

import CommercialModule from './CommercialModule'

import type {
  CommercialVariant,
} from './CommercialModule'

type PricingModuleProps = {
  wholesalePerDisplay: number
  wholesalePerBottle: number
  suggestedRetailPerBottle: number
  bottlesPerDisplay: number
  variant?: CommercialVariant
}

function PricingModule({
  wholesalePerDisplay,
  wholesalePerBottle,
  suggestedRetailPerBottle,
  bottlesPerDisplay,
  variant = 'standard',
}: PricingModuleProps) {

  return (
    <CommercialModule
      title="Standard Pricing"
      icon={Tag}
      variant={variant}
      metrics={[
        {
          icon: Package,
          label: 'Wholesale / Display',
          shortLabel: 'Display',
          value: formatCurrency(wholesalePerDisplay),
          detail: `${bottlesPerDisplay} bottles`,
        },
        {
          icon: DollarSign,
          label: 'Wholesale / Bottle',
          shortLabel: 'Unit Cost',
          value: formatCurrency(wholesalePerBottle),
          detail: 'Unit cost',
        },
        {
          icon: Tag,
          label: 'Suggested Retail',
          shortLabel: 'SRP / Bottle',
          value: formatCurrency(suggestedRetailPerBottle),
          detail: 'Per bottle',
        },
      ]}
    />
  )
}

export default PricingModule
