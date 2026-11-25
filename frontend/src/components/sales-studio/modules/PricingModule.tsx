
import { Tag, Package, DollarSign } from 'lucide-react'

import { formatCurrency } from '../pricing'

type PricingModuleProps = {
  wholesalePerDisplay: number
  wholesalePerBottle: number
  suggestedRetailPerBottle: number
  bottlesPerDisplay: number
}

function PricingModule({
  wholesalePerDisplay,
  wholesalePerBottle,
  suggestedRetailPerBottle,
  bottlesPerDisplay,
}: PricingModuleProps) {

  return (
    <section className="vz-pricing-module">

      <div className="vz-pricing-heading">
        <Tag />
        <span>Standard Pricing</span>
      </div>

      <div className="vz-pricing-grid">

        <div className="vz-pricing-item">
          <Package />

          <div>
            <span>Wholesale / Display</span>

            <strong>
              {formatCurrency(wholesalePerDisplay)}
            </strong>

            <small>
              {bottlesPerDisplay} bottles
            </small>
          </div>
        </div>

        <div className="vz-pricing-item">
          <DollarSign />

          <div>
            <span>Wholesale / Bottle</span>

            <strong>
              {formatCurrency(wholesalePerBottle)}
            </strong>

            <small>Unit cost</small>
          </div>
        </div>

        <div className="vz-pricing-item">
          <Tag />

          <div>
            <span>Suggested Retail</span>

            <strong>
              {formatCurrency(suggestedRetailPerBottle)}
            </strong>

            <small>Per bottle</small>
          </div>
        </div>

      </div>

    </section>
  )
}

export default PricingModule
