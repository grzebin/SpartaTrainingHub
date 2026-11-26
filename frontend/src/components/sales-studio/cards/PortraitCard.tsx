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

type PortraitCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
  showIngredients?: boolean
  showDescription?: boolean
  showBenefits?: boolean
  showPricing?: boolean
  showProfitability?: boolean
}

function PortraitCard({
  product,
  showSpecifications = true,
  showDisplay = true,
  showIngredients = false,
  showDescription = false,
  showBenefits = false,
  showPricing = false,
  showProfitability = false,
}: PortraitCardProps) {

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
      className={`vz-portrait-card vz-portrait-${visualDensity} ${overflow ? 'vz-overflow' : ''}`}
      ref={cardRef}
      style={cardStyle}
    >

      <div className="vz-portrait-brand" data-fit-region>

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

      {(showDescription || showBenefits || showIngredients) && (
        <div className="vz-portrait-details" data-fit-region>
          {showDescription && <DescriptionModule product={product} />}
          {(showBenefits || showIngredients) && (
            <div className="vz-portrait-information" data-fit-region>
              {showBenefits && <BenefitsModule product={product} />}
              {showIngredients && <IngredientsModule product={product} />}
            </div>
          )}
        </div>
      )}

      {(showPricing || showProfitability) && (
        <div className="vz-portrait-commercial" data-fit-region>
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

export default PortraitCard