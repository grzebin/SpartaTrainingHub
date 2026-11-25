import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

import type {
  SalesStudioProduct,
} from '../../../data/salesStudioProducts'

import wordmark from '../../../assets/sales-studio/brand/vivazen-wordmark-black.png'

import PackagingModule from '../modules/PackagingModule'
import IngredientsModule from '../modules/IngredientsModule'
import DescriptionModule from '../modules/DescriptionModule'
import BenefitsModule from '../modules/BenefitsModule'

type CompactCardProps = {
  product: SalesStudioProduct
  showSpecifications?: boolean
  showDisplay?: boolean
  showIngredients?: boolean
  showDescription?: boolean
  showBenefits?: boolean
}

function CompactCard({
  product,
  showSpecifications = true,
  showDisplay = true,
  showIngredients = false,
  showDescription = false,
  showBenefits = false,
}: CompactCardProps) {

  const contentRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(false)

  const activeModules = [
    showDescription,
    showBenefits,
    showIngredients,
  ].filter(Boolean).length

  const density =
    activeModules === 0
      ? 'minimal'
      : activeModules === 1
        ? 'standard'
        : 'detailed'

  useEffect(() => {
    const content = contentRef.current

    if (!content) return

    const checkFit = () => {
      setOverflow(
        content.scrollHeight > content.clientHeight + 2 ||
        content.scrollWidth > content.clientWidth + 2
      )
    }

    const observer = new ResizeObserver(checkFit)

    observer.observe(content)

    const frame = requestAnimationFrame(checkFit)

    document.fonts.ready.then(checkFit)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [
    product,
    showSpecifications,
    showDisplay,
    showIngredients,
    showDescription,
    showBenefits,
  ])

  const cardStyle = {
    '--vz-product-primary': product.colors.primary,
    '--vz-product-secondary': product.colors.secondary,
    '--vz-product-dark': product.colors.dark,
    '--vz-product-light': product.colors.light,
  } as CSSProperties

  return (
    <>
      <article
        className={`vz-compact-card vz-density-${density} ${
          overflow ? 'vz-overflow' : ''
        }`}
        style={cardStyle}
      >
        <div className="vz-compact-main">

          <div
            className="vz-compact-content"
            ref={contentRef}
          >

            <img
              className="vz-compact-wordmark"
              src={wordmark}
              alt="VIVAZEN"
            />

            <h2 className="vz-compact-title">
              {product.name}
            </h2>

            <div className="vz-compact-rule" />

            {showDescription && (
              <DescriptionModule product={product} />
            )}

            {showBenefits && (
              <BenefitsModule product={product} />
            )}

            {showIngredients && (
              <IngredientsModule product={product} />
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
          <PackagingModule product={product} />
        )}

      </article>

      {overflow && (
        <p
          className="vz-card-fit-warning"
          role="status"
        >
          Selected content exceeds this card's capacity.
          Remove a content module or choose a larger
          card format when available.
        </p>
      )}
    </>
  )
}

export default CompactCard