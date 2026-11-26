
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
import ProfitabilityModule from '../modules/ProfitabilityModule'
import { calculatePricing } from '../pricing'
import { calculateCardLayout } from '../cardLayout'
import { useCardFit } from '../useCardFit'
import type { CommercialVariant } from '../modules/CommercialModule'

type TallCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
  showIngredients?: boolean
  showDescription?: boolean
  showBenefits?: boolean
  showPricing?: boolean
  showProfitability?: boolean
}

function TallCard({
  product,
  showSpecifications = true,
  showDisplay = true,
  showIngredients = false,
  showDescription = false,
  showBenefits = false,
  showPricing = false,
  showProfitability = false,
}: TallCardProps) {

  const { density } = calculateCardLayout({
    showDescription, showBenefits, showIngredients, showPricing, showProfitability,
  })
  // Retain existing detailed CSS until the coordinated stylesheet update.
  const visualDensity = density === 'dense' ? 'detailed' : density
  const variant: CommercialVariant = density === 'detailed' || density === 'dense' ? 'condensed' : 'standard'
  const { cardRef, overflow } = useCardFit(JSON.stringify([
    product.id, showSpecifications, showDisplay, showDescription, showBenefits, showIngredients, showPricing, showProfitability,
  ]))

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
    <>
    <article
      className={`vz-tall-card vz-tall-${visualDensity} ${overflow ? 'vz-overflow' : ''}`}
      ref={cardRef}
      style={cardStyle}
    >

      <div className="vz-tall-brand" data-fit-region>

        <img
          className="vz-tall-wordmark"
          src={wordmark}
          alt="VIVAZEN"
        />

        <h2 className="vz-tall-title">
          {product.name}
        </h2>

        <div className="vz-tall-rule" />

      </div>

      <div
        className={`vz-tall-images ${
          !showDisplay ? 'vz-tall-bottle-only' : ''
        }`}
      >

        {showDisplay && (
          <img
            className="vz-tall-display"
            src={product.images.display}
            alt={`${product.name} retail display`}
          />
        )}

        <img
          className="vz-tall-bottle"
          src={product.images.bottle}
          alt={`${product.name} bottle`}
        />

      </div>

      {(showDescription ||
        showBenefits ||
        showIngredients || showPricing || showProfitability) && (

        <div className="vz-tall-details" data-fit-region>

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
              variant={variant}
              wholesalePerDisplay={pricing.wholesalePerDisplay}
              wholesalePerBottle={pricing.wholesalePerBottle}
              suggestedRetailPerBottle={pricing.suggestedRetailPerBottle}
              bottlesPerDisplay={product.specifications.bottlesPerDisplay}
            />
          )}

          {showProfitability && (
            <ProfitabilityModule
              variant={variant}
              grossMargin={pricing.grossMargin}
              grossProfitPerBottle={pricing.grossProfitPerBottle}
              grossProfitPerDisplay={pricing.grossProfitPerDisplay}
            />
          )}

        </div>

      )}

      {showSpecifications && (
        <PackagingModule product={product} />
      )}

    </article>
    {overflow && (
      <p className="vz-card-fit-warning" role="status">
        Selected content exceeds this card's capacity.
        Remove a content module or choose another card format.
      </p>
    )}
    </>
  )
}

export default TallCard
