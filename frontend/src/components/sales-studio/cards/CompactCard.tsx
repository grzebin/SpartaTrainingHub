import type { CSSProperties } from 'react'
import { Droplet, Package, Layers } from 'lucide-react'

import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

import wordmark from '../../../assets/sales-studio/brand/vivazen-wordmark-black.png'

type CompactCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
}

function CompactCard({
  product,
  showSpecifications = true,
  showDisplay = true,
}: CompactCardProps) {
  const specs = product.specifications

  const cardStyle = {
    '--vz-product-primary': product.colors.primary,
    '--vz-product-secondary': product.colors.secondary,
    '--vz-product-dark': product.colors.dark,
    '--vz-product-light': product.colors.light,
  } as CSSProperties

  return (
    <article
      className="vz-compact-card"
      style={cardStyle}
    >
      <div className="vz-compact-main">

        <div className="vz-compact-content">

          <img
            className="vz-compact-wordmark"
            src={wordmark}
            alt="VIVAZEN"
          />

          <h2 className="vz-compact-title">
            {product.name}
          </h2>

          <div className="vz-compact-rule" />

          {product.marketing.approvalStatus === 'approved' && (
            <p className="vz-compact-description">
              {product.marketing.description}
            </p>
          )}

        </div>

        <div className="vz-compact-images">

          {showDisplay && (
            <img
              className="vz-compact-display"
              src={product.images.display}
              alt={`${product.name} retail display`}
            />
          )}

          <img
            className="vz-compact-bottle"
            src={product.images.bottle}
            alt={`${product.name} bottle`}
          />

        </div>

      </div>

      {showSpecifications && (
        <div className="vz-compact-specifications">

          <div className="vz-compact-spec">
            <Droplet />
            <div>
              <strong>{specs.volumeMl} mL</strong>
              <span>{specs.volumeOz} fl oz per bottle</span>
            </div>
          </div>

          <div className="vz-compact-spec">
            <Layers />
            <div>
              <strong>
                {specs.servingsPerBottle} Servings
              </strong>
              <span>Per bottle</span>
            </div>
          </div>

          <div className="vz-compact-spec">
            <Package />
            <div>
              <strong>
                {specs.bottlesPerDisplay} Bottles
              </strong>
              <span>Per display</span>
            </div>
          </div>

        </div>
      )}

    </article>
  )
}

export default CompactCard