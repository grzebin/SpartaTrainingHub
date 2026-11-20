
import { Package } from 'lucide-react'

export type ProductSpecs = {
  name: string
  productLine: string
  mitMg: number
  kavaMg?: number
  displaySize: number
  retailerCost: number
  suggestedRetail: number
}

type ProductSpecsCardProps = {
  product: ProductSpecs
}

function ProductSpecsCard({ product }: ProductSpecsCardProps) {
  const currency = (value: number) =>
    value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })

  return (
    <div className="product-specs-card">
      <div className="product-specs-header">
        <div>
          <span className="product-specs-category">
            {product.productLine} Portfolio
          </span>
          <h3>{product.name}</h3>
        </div>

        <Package size={23} aria-hidden="true" />
      </div>

      <div className="product-specs-grid">
        <div>
          <span>MIT / Bottle</span>
          <strong>{product.mitMg} mg</strong>
        </div>

        <div>
          <span>Kava / Bottle</span>
          <strong>
            {product.kavaMg !== undefined
              ? `${product.kavaMg} mg`
              : 'None listed'}
          </strong>
        </div>

        <div>
          <span>Display Size</span>
          <strong>{product.displaySize} bottles</strong>
        </div>

        <div>
          <span>Retailer Cost</span>
          <strong>{currency(product.retailerCost)}</strong>
        </div>

        <div>
          <span>Suggested Retail</span>
          <strong>{currency(product.suggestedRetail)}</strong>
        </div>

        <div>
          <span>Product Line</span>
          <strong>{product.productLine}</strong>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecsCard
