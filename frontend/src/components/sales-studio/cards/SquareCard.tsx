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

type SquareCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
  showIngredients?: boolean
  showDescription?: boolean
  showBenefits?: boolean
  showPricing?: boolean
}

function SquareCard({
  product,
  showSpecifications = true,
  showDisplay = true,
  showIngredients = false,
  showDescription = false,
  showBenefits = false,
  showPricing = false,
}: SquareCardProps) {

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
      className={`vz-square-card vz-square-${density}`}
      style={cardStyle}
    >

      <div className="vz-square-brand">

        <img
          className="vz-square-wordmark"
          src={wordmark}
          alt="VIVAZEN"
        />

        <h2 className="vz-square-title">
          {product.name}
        </h2>

        <div className="vz-square-rule" />

      </div>

      <div className="vz-square-main">

        {activeModules > 0 && (

          <div className="vz-square-details">

            {showDescription && (
              <DescriptionModule product={product} />
            )}

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

        <div
          className={`vz-square-images ${
            !showDisplay ? 'vz-square-bottle-only' : ''
          }`}
        >

          {showDisplay && (
            <img
              className="vz-square-display"
              src={product.images.display}
              alt={`${product.name} retail display`}
            />
          )}

          <img
            className="vz-square-bottle"
            src={product.images.bottle}
            alt={`${product.name} bottle`}
          />

        </div>

      </div>

      {showSpecifications && (
        <PackagingModule product={product} />
      )}

    </article>
  )
}

export default SquareCard
