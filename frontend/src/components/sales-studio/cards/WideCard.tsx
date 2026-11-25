import type { CSSProperties } from 'react'

import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

import wordmark from '../../../assets/sales-studio/brand/vivazen-wordmark-black.png'

import PackagingModule from '../modules/PackagingModule'
import IngredientsModule from '../modules/IngredientsModule'
import DescriptionModule from '../modules/DescriptionModule'
import BenefitsModule from '../modules/BenefitsModule'
import PricingModule from '../modules/PricingModule'
import { calculatePricing } from '../pricing'

type WideCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
  showIngredients?: boolean
  showDescription?: boolean
  showBenefits?: boolean
  showPricing?: boolean
}

function WideCard({
  product,
  showSpecifications = true,
  showDisplay = true,
  showIngredients = false,
  showDescription = false,
  showBenefits = false,
  showPricing = false,
}: WideCardProps) {

  const activeModules = [
    showDescription,
    showBenefits,
    showIngredients,
    showPricing,
  ].filter(Boolean).length

  const density =
    activeModules === 0
      ? 'minimal'
      : activeModules === 1
        ? 'standard'
        : 'detailed'

  const pricing = calculatePricing({
    wholesalePerDisplay: product.pricing.wholesalePerDisplay,
    suggestedRetailPerBottle: product.pricing.suggestedRetailPerBottle,
    bottlesPerDisplay: product.specifications.bottlesPerDisplay,
    displaysPerCase: product.specifications.displaysPerCase,
  })

  const cardStyle = {
    '--vz-product-primary': product.colors.primary,
    '--vz-product-secondary': product.colors.secondary,
    '--vz-product-dark': product.colors.dark,
    '--vz-product-light': product.colors.light,
  } as CSSProperties

  return (
    <article
      className={`vz-wide-card vz-wide-${density}`}
      style={cardStyle}
    >

      <div className="vz-wide-main">

        <div className="vz-wide-brand">

          <img
            className="vz-wide-wordmark"
            src={wordmark}
            alt="VIVAZEN"
          />

          <h2 className="vz-wide-title">
            {product.name}
          </h2>

          <div className="vz-wide-rule" />

          {showDescription && (
            <DescriptionModule product={product} />
          )}

        </div>

        <div
          className={`vz-wide-images ${
            !showDisplay ? 'vz-wide-bottle-only' : ''
          }`}
        >

          {showDisplay && (
            <img
              className="vz-wide-display"
              src={product.images.display}
              alt={`${product.name} retail display`}
            />
          )}

          <img
            className="vz-wide-bottle"
            src={product.images.bottle}
            alt={`${product.name} bottle`}
          />

        </div>

        {(showBenefits || showIngredients || showPricing) && (
          <div className="vz-wide-details">

            {showBenefits && (
              <BenefitsModule product={product} />
            )}

            {showIngredients && (
              <IngredientsModule product={product} />
            )}

            {showPricing && (
              <PricingModule
                wholesalePerDisplay={pricing.wholesalePerDisplay}
                wholesalePerBottle={pricing.wholesalePerBottle}
                suggestedRetailPerBottle={pricing.suggestedRetailPerBottle}
                bottlesPerDisplay={product.specifications.bottlesPerDisplay}
              />
            )}

          </div>
        )}

      </div>

      {showSpecifications && (
        <PackagingModule product={product} />
      )}

    </article>
  )
}

export default WideCard