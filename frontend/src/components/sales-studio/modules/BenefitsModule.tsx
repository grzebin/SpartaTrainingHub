import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

import { studioIcons } from '../studioIcons'
import { previewContent } from '../previewContent'

type BenefitsModuleProps = {
  product: SalesStudioProduct
}

function BenefitsModule({
  product,
}: BenefitsModuleProps) {
  const { benefits, approvalStatus } = product.marketing

  const approved =
    approvalStatus === 'approved' &&
    benefits.length > 0

  if (!approved && !import.meta.env.DEV) {
    return null
  }

  const items = approved
    ? benefits
    : previewContent.benefits

  const icons = [
    studioIcons.zap,
    studioIcons.target,
    studioIcons.leaf,
  ]

  return (
    <section className="vz-benefits-module">

      {!approved && (
        <span className="vz-draft-label">
          DEVELOPMENT SAMPLE
        </span>
      )}

      {items.map((benefit, index) => {
        const Icon = approved
          ? studioIcons['shield-check']
          : icons[index % icons.length]

        return (
          <div
            className="vz-benefit-item"
            key={`${index}-${benefit}`}
          >
            <Icon
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>{benefit}</span>
          </div>
        )
      })}

    </section>
  )
}

export default BenefitsModule