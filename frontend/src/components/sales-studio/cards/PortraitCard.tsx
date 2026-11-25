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

type PortraitCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
  showIngredients?: boolean
  showDescription?: boolean
  showBenefits?: boolean
  showPricing?: boolean
}

function PortraitCard({
  product,
  showSpecifications = true,
  showDisplay = true,
  showIngredients = false,
  showDescription = false,
  showBenefits = false,
  showPricing = false,
}: PortraitCardProps) {

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
      className={`vz-portrait-card vz-portrait-${density}`}
      style={cardStyle}
    >

      <div className="vz-portrait-brand">

        <img
          className="vz-portrait-wordmark"
          src={wordmark}
          alt="VIVAZEN"
        />

        <h2 className="vz-portrait-title">
          {product.name}
        </h2>

        <div className="vz-portrait-rule" />

      </div>

      <div
        className={`vz-portrait-images ${
          !showDisplay ? 'vz-portrait-bottle-only' : ''
        }`}
      >

        {showDisplay && (
          <img
            className="vz-portrait-display"
            src={product.images.display}
            alt={`${product.name} retail display`}
          />
        )}

        <img
          className="vz-portrait-bottle"
          src={product.images.bottle}
          alt={`${product.name} bottle`}
        />

      </div>

      {(showDescription ||
        showBenefits ||
        showIngredients || showPricing) && (

        <div className="vz-portrait-details">

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

      {showSpecifications && (
        <PackagingModule product={product} />
      )}

    </article>
  )
}

export default PortraitCard