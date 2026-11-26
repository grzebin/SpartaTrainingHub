
import {
  TrendingUp,
  Percent,
  DollarSign,
  Package,
} from 'lucide-react'

import {
  formatCurrency,
  formatPercentage,
} from '../pricing'

import CommercialModule from './CommercialModule'

import type {
  CommercialVariant,
} from './CommercialModule'

type ProfitabilityModuleProps = {
  grossMargin: number | null
  grossProfitPerBottle: number
  grossProfitPerDisplay: number
  variant?: CommercialVariant
}

function ProfitabilityModule({
  grossMargin,
  grossProfitPerBottle,
  grossProfitPerDisplay,
  variant = 'standard',
}: ProfitabilityModuleProps) {

  return (
    <CommercialModule
      title="Retailer Profitability"
      icon={TrendingUp}
      variant={variant}
      className="vz-profitability-module"
      metrics={[
        {
          icon: Percent,
          label: 'Gross Margin',
          shortLabel: 'Margin',
          value: formatPercentage(grossMargin),
          detail: 'At suggested retail',
        },
        {
          icon: DollarSign,
          label: 'Profit / Bottle',
          shortLabel: 'Profit / Bottle',
          value: formatCurrency(grossProfitPerBottle),
          detail: 'Gross profit',
        },
        {
          icon: Package,
          label: 'Profit / Display',
          shortLabel: 'Profit / Display',
          value: formatCurrency(grossProfitPerDisplay),
          detail: 'Full sell-through',
        },
      ]}
    />
  )
}

export default ProfitabilityModule
